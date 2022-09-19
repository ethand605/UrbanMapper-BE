import {Distance, Duration, TransitDetails} from "@googlemaps/google-maps-services-js/src/common";
import {LatLngLiteral, TravelMode} from "@googlemaps/google-maps-services-js";

export type multimodalDirection = {
    steps: step[];
    duration: Duration;
    biking_distance: Distance;
    departure_time: Duration;
    arrival_time: Duration;
};

export type step = {
    distance: Distance;
    duration: Duration;
    polyline: string;
    start_location: LatLngLiteral;
    end_location: LatLngLiteral;
    start_address: string,
    end_address: string,
    travel_mode: TravelMode;
    transit_details?: TransitDetails
};
