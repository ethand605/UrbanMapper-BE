import {
    Client,
    DirectionsResponse,
    LatLng,
    LatLngLiteral,
    TravelMode,
    DirectionsResponseData
} from "@googlemaps/google-maps-services-js";
import {GOOGLE_MAPS_API_KEY} from "../utils/config";
import {multimodalDirection, step} from "../types/directions";
import {geocode, reverseGeocode} from "../utils/geocodeHelper";
import secondsToDatePST from "../utils/dateHelper";

const client = new Client({}); //creates a google map API client
//TODO: to consider routes that can be done if biked instead of walked, get all the available bus station. set that to the origin, and use that origin to set the first leg of the trip using leg
//TODO: add alternative routes

/**
 * returns the default public transit direction from origin to destination
 */
async function getDefaultTransitDirection(originAddress: string, destinationAddress:string): Promise<DirectionsResponseData> {
    const origin: LatLng = await geocode(originAddress, client);
    const destination: LatLng = await geocode(destinationAddress, client);
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

async function getBicyclingDirection(legOrigin: LatLngLiteral, legDestination: LatLngLiteral) :Promise<DirectionsResponseData> {
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

/**
 * converts the default transit direction into a bicycling direction by replacing each walking leg with a bicycling leg
 */
async function convertToMultimodalDirection(defaultDirection: DirectionsResponseData): Promise<multimodalDirection> {
    const finalDirection: multimodalDirection = {
        steps: [],
        duration: {
            text: "",
            value: 0
        },
        biking_distance: {
            text: "",
            value: 0
        },
        departure_time: {
            text: "",
            value: 0
        },
        arrival_time: {
            text: "",
            value: 0
        },
    };

    //populating the steps array
    for (const step of defaultDirection.routes[0].legs[0].steps) {
        //start and end addresses of the whole trip
        const start_address = await reverseGeocode(step.start_location, client);
        const end_address = await reverseGeocode(step.end_location, client);
        let newStep: step;

        //change the waking/driving step into biking
        const stepTravelMode: string = step.travel_mode.valueOf().toLocaleLowerCase();
        if (stepTravelMode===TravelMode.walking || stepTravelMode===TravelMode.driving) {
            //TODO: fix the last bike path
            const bicyclingDirections: DirectionsResponseData = await getBicyclingDirection(step.start_location, step.end_location);
            const bicyclingLeg = bicyclingDirections.routes[0].legs[0];
            newStep = {
                distance: bicyclingLeg.distance,
                duration: bicyclingLeg.duration,
                polyline: bicyclingDirections.routes[0].overview_polyline.points,
                start_location: step.start_location,
                end_location: step.end_location,
                start_address,
                end_address,
                travel_mode: TravelMode.bicycling,
            };
        }else {
            newStep = {
                distance: step.distance,
                duration: step.duration,
                polyline: step.polyline.points,
                start_location: step.start_location,
                end_location: step.end_location,
                start_address,
                end_address,
                travel_mode: step.travel_mode,
                transit_details: step.transit_details,
            };
        }
        finalDirection.steps.push(newStep);
    }

    //calculate the duration
    finalDirection.duration.value = finalDirection.steps.reduce((previousValue:number, step) => previousValue + step.duration.value, 0);
    finalDirection.duration.text = Math.round(finalDirection.duration.value/60).toString()+" mins"; //convert to minutes

    //calculate the departure and arrival time
    //departure time depends on the travel mode of the first leg
    if (finalDirection.steps[0].travel_mode===TravelMode.bicycling){
        finalDirection.departure_time.value = finalDirection.steps[1].transit_details.departure_time.value.valueOf()-finalDirection.steps[0].duration.value;
    }else{
        finalDirection.departure_time.value = finalDirection.steps[0].transit_details.departure_time.value.valueOf();
    }
    finalDirection.arrival_time.value = finalDirection.departure_time.value + finalDirection.duration.value;

    finalDirection.arrival_time.text = secondsToDatePST(finalDirection.arrival_time.value);
    finalDirection.departure_time.text = secondsToDatePST(finalDirection.departure_time.value);

    //calculate the distance
    finalDirection.biking_distance.value = finalDirection.steps.reduce((previousValue, step) => {
        if (step.travel_mode===TravelMode.bicycling) {
            return previousValue + step.distance.value;
        }else {
            return previousValue;
        }
    }, 0);
    finalDirection.biking_distance.text = Math.round(finalDirection.biking_distance.value/1000).toString()+" km"; //convert to km
    return finalDirection;
}

async function getMultiModalDirection(originAddress: string, destinationAddress: string) {
    return await convertToMultimodalDirection(await getDefaultTransitDirection(originAddress, destinationAddress));
}

export {getDefaultTransitDirection, convertToMultimodalDirection, getMultiModalDirection};
