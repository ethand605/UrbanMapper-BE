import express from "express";
import "dotenv/config";
import cors from "cors";
import {getDefaultTransitDirection, convertToMultimodalDirection} from "./services/directionServices";

// import {baseURL, resp} from "./resource";


const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors<Request>());
const PORT = 3000;


const testDirection = async () => {
  const finalDirection = await convertToMultimodalDirection(await getDefaultTransitDirection("Alton Pkwy 5051", "Donald Bren Hall, Irvine, CA"));
  console.log(JSON.stringify(finalDirection, null, 4));
  console.log("duration", finalDirection.duration/60,
      "\narrival", new Date(finalDirection.arrival_time* 1000).toLocaleString('en-US', {timeZone: 'America/Los_Angeles',}),
      "\ndeparture", new Date(finalDirection.departure_time* 1000).toLocaleString('en-US', {timeZone: 'America/Los_Angeles',}));
};


app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  testDirection()
      .then(() => console.log("done"))
      .catch(err => console.log(err));
//     getDefaultTransitDirection(resp);
}); 