import {
    Client,
    LatLngLiteral
} from "@googlemaps/google-maps-services-js";
import {GOOGLE_MAPS_API_KEY} from "./config";

/**
 * converts the address into a LatLng string in the format of "lat,lng"
 */
async function geocode(address: string, client: Client): Promise<string>{
    const resp =  await client.geocode({params: {address: address, key:GOOGLE_MAPS_API_KEY}});
    const location = resp.data.results[0].geometry.location; //results[0] is the best match
    return `${location.lat},${location.lng}`;
}

/**
 * converts a latlng object into formatted address
 */
async function reverseGeocode(latlng: LatLngLiteral, client: Client): Promise<string>{
    const resp = await client.reverseGeocode({params: {latlng: latlng, key: GOOGLE_MAPS_API_KEY}});
    return resp.data.results[0].formatted_address; //results[0] is the best match
}

export {geocode, reverseGeocode};
