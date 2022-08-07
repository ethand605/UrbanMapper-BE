/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express';
import {baseURL, resp} from "./resource";
import axios from "axios";
const app = express();
app.use(express.json());

const PORT = 3000;

function getDefaultTransitDirection(resp: { geocoded_waypoints?: { geocoder_status: string; place_id: string; types: string[]; }[]; routes: any; status?: string; }) {
    const steps = resp.routes[0].legs[0].steps;
    steps.forEach((step: { travel_mode: string; start_location: { lat: any; lng: any; }; end_location: { lat: any; lng: any; }; start_address: any; end_address: any; duration: any; distance: any; }) => {
        if (step.travel_mode === 'WALKING') {
            const options = `origin=${step.start_location.lat},${step.start_location.lng}
            &destination=${step.end_location.lat},${step.end_location.lng}
            &mode=bicycling`;
            // console.log(baseURL+options+"\n");
            getBicyclingDirection(baseURL+options)
                .then()
                .catch(err => console.log(err));
        }else{
            console.log(step.start_location, step.end_location, step.duration, step.distance, step.travel_mode, "\n");

        }
    });
}

async function getBicyclingDirection(url: string) {
    const resp = await axios.get(url);
    const data = await resp.data;
    const legs = data.routes[0].legs[0];
    console.log(`${legs.start_address},${legs.end_address},${legs.distance.text},${legs.duration.text}`);
}


app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
//   const steps = resp.routes[0].legs[0].steps;
//   steps.forEach(step => {

//     console.log(step.start_location, step.end_location, step.travel_mode);
//   });
    getDefaultTransitDirection(resp);
}); 