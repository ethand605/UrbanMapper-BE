"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToMultimodalDirection = exports.getDefaultTransitDirection = void 0;
const google_maps_services_js_1 = require("@googlemaps/google-maps-services-js");
const client = new google_maps_services_js_1.Client({});
function getDefaultTransitDirection(originAddress, destinationAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        // let origin = await client.geocode({params: {address: originAddress, key=process.env.GOOGLE_API_KEY}})}});
        const origin = yield geocode(originAddress);
        const destination = yield geocode(destinationAddress);
        const defaultTransitDirection = yield client.directions({
            params: {
                origin,
                destination,
                mode: google_maps_services_js_1.TravelMode.transit,
                key: process.env.GOOGLE_MAPS_API_KEY,
            }
        });
        return defaultTransitDirection.data;
    });
}
exports.getDefaultTransitDirection = getDefaultTransitDirection;
function geocode(address) {
    return client.geocode({ params: { address: address, key: process.env.GOOGLE_MAPS_API_KEY } })
        .then((resp) => resp.data)
        .then((data) => data.results[0].geometry.location)
        .then((location) => `${location.lat},${location.lng}`);
}
function getBicyclingDirection(legOrigin, legDestination) {
    return __awaiter(this, void 0, void 0, function* () {
        //what you need here: distance, duration, start_location, end_location, polyline. as for the start and end time, end time would be start time of bus. start time is end time minus duration.
        const bicyclingDirection = yield client.directions({
            params: {
                origin: legOrigin,
                destination: legDestination,
                mode: google_maps_services_js_1.TravelMode.bicycling,
                key: process.env.GOOGLE_MAPS_API_KEY,
            }
        });
        return bicyclingDirection.data;
    });
}
/**
 * converts the default transit direction into a bicycling direction, changing the legs and duration of the default transit direction.
 * @param defaultDirection
 */
function convertToMultimodalDirection(defaultDirection) {
    return __awaiter(this, void 0, void 0, function* () {
        const finalDirection = {
            steps: [],
            duration: 0,
            departure_time: 0,
            arrival_time: 0,
        };
        for (const step of defaultDirection.routes[0].legs[0].steps) {
            if (step.travel_mode.valueOf().toLocaleLowerCase() === google_maps_services_js_1.TravelMode.walking) {
                const bicyclingDirection = yield getBicyclingDirection(step.start_location, step.end_location);
                finalDirection.steps.push({
                    distance: bicyclingDirection.routes[0].legs[0].distance,
                    duration: bicyclingDirection.routes[0].legs[0].duration,
                    polyline: bicyclingDirection.routes[0].overview_polyline,
                    start_location: step.start_location,
                    end_location: step.end_location,
                    travel_mode: google_maps_services_js_1.TravelMode.bicycling,
                });
            }
            else {
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
        finalDirection.duration = finalDirection.steps.reduce((previousValue, step) => previousValue + step.duration.value, 0);
        if (finalDirection.steps[0].travel_mode === google_maps_services_js_1.TravelMode.bicycling) {
            finalDirection.departure_time = finalDirection.steps[1].transit_details.departure_time.value - finalDirection.steps[0].duration.value;
        }
        else {
            finalDirection.departure_time = finalDirection.steps[0].transit_details.departure_time.value;
        }
        finalDirection.arrival_time = finalDirection.departure_time + finalDirection.duration;
        return finalDirection;
    });
}
exports.convertToMultimodalDirection = convertToMultimodalDirection;
