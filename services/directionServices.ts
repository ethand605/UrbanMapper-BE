import {
    Client,
    DirectionsResponse,
    GeocodeResponse,
    GeocodeResponseData,
    LatLng
} from "@googlemaps/google-maps-services-js";
import {LatLngLiteral, TravelMode} from "@googlemaps/google-maps-services-js/src/common";
import DirectionsResult = google.maps.DirectionsResult;

const client = new Client({});

// function getDefaultTransitDirection(resp: google.maps.DirectionsResult) {
//     const steps: google.maps.DirectionsStep[] = resp.routes[0].legs[0].steps;
//     steps.forEach((step: google.maps.DirectionsStep) => {
//         if (step.travel_mode === 'WALKING') {
//             const options = `origin=${step.start_location.lat},${step.start_location.lng}
//             &destination=${step.end_location.lat},${step.end_location.lng}
//             &mode=bicycling`;
//             // console.log(baseURL+options+"\n");
//             getBicyclingDirection(baseURL+options)
//                 .then()
//                 .catch(err => console.log(err));
//         }else{
//             console.log(step.start_location, step.end_location, step.duration, step.distance, step.travel_mode, "\n");
//
//         }
//     });
// }

async function getDefaultTransitDirection(originAddress: string, destinationAddress:string){
    // let origin = await client.geocode({params: {address: originAddress, key=process.env.GOOGLE_API_KEY}})}});
    const origin: LatLng = await geocode(originAddress);
    const destination: LatLng = await geocode(destinationAddress);
    const defaultTransitDirection: DirectionsResponse = await client.directions({
            params: {
                origin,
                destination,
                mode: TravelMode.transit,
                key: process.env.GOOGLE_API_KEY,
            }
    });
    return defaultTransitDirection;
}

function geocode(address: string){
    return client.geocode({params: {address: address, key=process.env.GOOGLE_API_KEY}})
        .then((resp: GeocodeResponse)  => resp.data)
        .then((data: GeocodeResponseData) => data.results[0].geometry.location)
        .then((location: LatLngLiteral) => `${location.lat},${location.lng}`);
}

async function getBicyclingDirection(url: string) {
    const resp = await axios.get(url);
    const data: google.maps.DirectionsResult = resp.data;
    const legs: google.maps.DirectionsLeg = data.routes[0].legs[0];
    console.log(`${legs.start_address},${legs.end_address},${legs.distance.text},${legs.duration.text}`);
}