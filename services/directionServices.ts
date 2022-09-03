import {
    Client,
    DirectionsResponse,
    LatLng,
    LatLngLiteral,
    TravelMode,
    DirectionsResponseData
} from "@googlemaps/google-maps-services-js";
import {GOOGLE_MAPS_API_KEY} from "../utils/config";
import {Distance, Duration, TransitDetails} from "@googlemaps/google-maps-services-js/src/common";

const client = new Client({});
//TODO: to consider routes that can be done if biked instead of walked, get all the available bus station. set that to the origin, and use that origin to set the first leg of the trip using leg
//TODO: use await/async for all functions
//TODO: add alternative routes
async function getDefaultTransitDirection(originAddress: string, destinationAddress:string): Promise<DirectionsResponseData> {
    const origin: LatLng = await geocode(originAddress);
    const destination: LatLng = await geocode(destinationAddress);
    const defaultTransitDirection: DirectionsResponse = await client.directions({
            params: {
                origin,
                destination,
                mode: TravelMode.transit,
                key: GOOGLE_MAPS_API_KEY,
            }
    });
    return defaultTransitDirection.data;
}

async function geocode(address: string): Promise<string>{
    const resp =  await client.geocode({params: {address: address, key:GOOGLE_MAPS_API_KEY}});
    const location = resp.data.results[0].geometry.location;
    return `${location.lat},${location.lng}`;
}

// function reverseGeocode(latlng: LatLngLiteral): Promise<string>{
//     return client.reverseGeocode({params: {latlng: latlng, key: GOOGLE_MAPS_API_KEY}})
//         .then((resp: GeocodeResponse) => resp.data)
//         .then((data: GeocodeResponseData) => data.results[1].formatted_address);
// }

async function getBicyclingDirection(legOrigin: LatLngLiteral, legDestination: LatLngLiteral) :Promise<DirectionsResponseData> {//, arrivalTime: Date) {
    //what you need here: distance, duration, start_location, end_location, polyline. as for the start and end time, end time would be start time of bus. start time is end time minus duration.
    const bicyclingDirection: DirectionsResponse = await client.directions({
        params: {
            origin: legOrigin,
            destination: legDestination,
            mode: TravelMode.bicycling,
            key: GOOGLE_MAPS_API_KEY,
        }
    });
    return bicyclingDirection.data;
}

type multimodalDirection = {
    steps: step[];
    duration: number;
    departure_time: number | string | Date;
    arrival_time: number | string | Date;
};

type step = {
    distance: Distance;
    duration: Duration;
    polyline: string;
    start_location: LatLngLiteral;
    end_location: LatLngLiteral;
    travel_mode: TravelMode;
    transit_details?: TransitDetails
};

/**
 * converts the default transit direction into a bicycling direction, changing the legs and duration of the default transit direction.
 * @param defaultDirection
 */
async function convertToMultimodalDirection(defaultDirection: DirectionsResponseData): Promise<multimodalDirection> {
    const finalDirection: multimodalDirection = {
        steps: [],
        duration: 0, //TODO: clean this up
        departure_time: 0,
        arrival_time: 0,
    };
    //TODO: edge case, what if the map tells you to drive to the bus stop
    //also don't rule out the ones that are possible if bike instead of walking
    for (const step of defaultDirection.routes[0].legs[0].steps) {
        if (step.travel_mode.valueOf().toLocaleLowerCase()===TravelMode.walking){
            const bicyclingDirection: DirectionsResponseData = await getBicyclingDirection(step.start_location, step.end_location);
            finalDirection.steps.push({
                //TODO: define the type for this object
                distance: bicyclingDirection.routes[0].legs[0].distance,
                duration: bicyclingDirection.routes[0].legs[0].duration,
                polyline: bicyclingDirection.routes[0].overview_polyline.points,
                start_location: step.start_location,
                end_location: step.end_location,
                travel_mode: TravelMode.bicycling,
            });
        }else {
            finalDirection.steps.push({
                distance: step.distance,
                duration: step.duration,
                polyline: step.polyline.points,
                start_location: step.start_location,
                end_location: step.end_location,
                travel_mode: step.travel_mode,
                transit_details: step.transit_details,
            });
        }
    }
    //TODO: clean up the results so the FE only gets the necessary information
    //calculate duration
    finalDirection.duration = finalDirection.steps.reduce((previousValue:number, step) => previousValue + step.duration.value, 0);
    //departure time depends on the travel mode of the first leg
    //TODO: put all the date time stuff in util helper
    if (finalDirection.steps[0].travel_mode===TravelMode.bicycling){
        finalDirection.departure_time = finalDirection.steps[1].transit_details.departure_time.value.valueOf()-finalDirection.steps[0].duration.value;
    }else{
        finalDirection.departure_time = finalDirection.steps[0].transit_details.departure_time.value.valueOf();
    }
    finalDirection.arrival_time = finalDirection.departure_time + finalDirection.duration;
    finalDirection.duration = Math.round(finalDirection.duration/60); //convert to minutes

    const dateStringOptions = {
        hour: '2-digit',
        minute:'2-digit',
        timeZone: 'America/Los_Angeles'
    };

    finalDirection.arrival_time = new Date(finalDirection.arrival_time* 1000).toLocaleTimeString('en-US', dateStringOptions as Intl.DateTimeFormatOptions);
    finalDirection.departure_time = new Date(finalDirection.departure_time* 1000).toLocaleTimeString("en-US", dateStringOptions as Intl.DateTimeFormatOptions);
    console.log(finalDirection.departure_time);
    return finalDirection;
}

async function getMultiModalDirection(originAddress: string, destinationAddress: string) {
    return await convertToMultimodalDirection(await getDefaultTransitDirection(originAddress, destinationAddress));
}

export {getDefaultTransitDirection, convertToMultimodalDirection, getMultiModalDirection};
