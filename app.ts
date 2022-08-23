import express from "express";
import cors from "cors";
import {getMultiModalDirection} from "./services/directionServices";
import {PORT} from "./utils/config";

const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors<Request>());


// const testDirection = async () => {
//   const finalDirection = await convertToMultimodalDirection(await getDefaultTransitDirection("Alton Pkwy 5051", "Donald Bren Hall, Irvine, CA"));
//   console.log(JSON.stringify(finalDirection, null, 4));
//   console.log("duration", finalDirection.duration/60,
//       "\narrival", new Date(finalDirection.arrival_time* 1000).toLocaleString('en-US', {timeZone: 'America/Los_Angeles',}),
//       "\ndeparture", new Date(finalDirection.departure_time* 1000).toLocaleString('en-US', {timeZone: 'America/Los_Angeles',}));
// };


app.get("/direction", (req, res) => {
    //TODO turn this into async await?
    console.log(req.query);
    getMultiModalDirection("Alton Pkwy 5051", "Donald Bren Hall, Irvine, CA")
        .then((finalDirection) => {console.log(finalDirection); res.send(finalDirection);} )
        .catch((err) => {console.log(err); res.send(err);} );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // testDirection()
  //     .then(() => console.log("done"))
  //     .catch(err => console.log(err));
}); 