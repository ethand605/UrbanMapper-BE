import express from "express";
import "dotenv/config";
// import axios from "axios";
import cors from "cors";

// import {baseURL, resp} from "./resource";


const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors<Request>());
const PORT = 3000;





app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

//     getDefaultTransitDirection(resp);
}); 