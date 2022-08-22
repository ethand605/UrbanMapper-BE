import {
    Client,
    DirectionsResponse,
    GeocodeResponse,
    GeocodeResponseData,
    LatLng,
    LatLngLiteral,
    TravelMode,
    DirectionsResponseData
} from "@googlemaps/google-maps-services-js";
const client = new Client({});


async function getDefaultTransitDirection(originAddress: string, destinationAddress:string): Promise<DirectionsResponseData> {
    // let origin = await client.geocode({params: {address: originAddress, key=process.env.GOOGLE_API_KEY}})}});
    const origin: LatLng = await geocode(originAddress);
    const destination: LatLng = await geocode(destinationAddress);
    const defaultTransitDirection: DirectionsResponse = await client.directions({
            params: {
                origin,
                destination,
                mode: TravelMode.transit,
                key: process.env.GOOGLE_MAPS_API_KEY,
            }
    });
    return defaultTransitDirection.data;
}

function geocode(address: string){
    return client.geocode({params: {address: address, key:process.env.GOOGLE_MAPS_API_KEY}})
        .then((resp: GeocodeResponse)  => resp.data)
        .then((data: GeocodeResponseData) => data.results[0].geometry.location)
        .then((location: LatLngLiteral) => `${location.lat},${location.lng}`);
}

async function getBicyclingDirection(legOrigin: LatLngLiteral, legDestination: LatLngLiteral) :Promise<DirectionsResponseData> {//, arrivalTime: Date) {
    //what you need here: distance, duration, start_location, end_location, polyline. as for the start and end time, end time would be start time of bus. start time is end time minus duration.
    const bicyclingDirection: DirectionsResponse = await client.directions({
        params: {
            origin: legOrigin,
            destination: legDestination,
            mode: TravelMode.bicycling,
            key: process.env.GOOGLE_MAPS_API_KEY,
        }
    });
    return bicyclingDirection.data;
}

/**
 * converts the default transit direction into a bicycling direction, changing the legs and duration of the default transit direction.
 * @param defaultDirection
 */
async function convertToMultimodalDirection(defaultDirection: DirectionsResponseData) {
    const finalDirection = {
        steps: [],
        duration: 0, //TODO: clean this up
        departure_time: 0,
        arrival_time: 0,
    };
    for (const step of defaultDirection.routes[0].legs[0].steps) {
        if (step.travel_mode.valueOf().toLocaleLowerCase()===TravelMode.walking){
            const bicyclingDirection: DirectionsResponseData = await getBicyclingDirection(step.start_location, step.end_location);
            finalDirection.steps.push({
                distance: bicyclingDirection.routes[0].legs[0].distance,
                duration: bicyclingDirection.routes[0].legs[0].duration,
                polyline: bicyclingDirection.routes[0].overview_polyline,
                start_location: step.start_location,
                end_location: step.end_location,
                travel_mode: TravelMode.bicycling,
            });
        }else {
            finalDirection.steps.push({
                distance: step.distance,
                duration: step.duration,
                polyline: step.polyline,
                start_location: step.start_location,
                end_location: step.end_location,
                travel_mode: step.travel_mode,
                transit_details: step.transit_details,
            });
        }
    }
    //calculate duration
    finalDirection.duration = <number>finalDirection.steps.reduce((previousValue:number, step) => previousValue + <number>step.duration.value, 0);
    if (finalDirection.steps[0].travel_mode===TravelMode.bicycling){
        finalDirection.departure_time = <number>finalDirection.steps[1].transit_details.departure_time.value-finalDirection.steps[0].duration.value;
    }else{
        finalDirection.departure_time = <number>finalDirection.steps[0].transit_details.departure_time.value;
    }
    finalDirection.arrival_time = finalDirection.departure_time + finalDirection.duration;
    return finalDirection;
}

export {getDefaultTransitDirection, convertToMultimodalDirection};