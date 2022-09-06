import express, {RequestHandler} from "express";
import cors from "cors";
import {getMultiModalDirection} from "./services/directionServices";
import {PORT} from "./utils/config";

const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors<Request>());

app.get("/direction/:origin/:destination", ( async (req, res) => {
    const finalDirection = await getMultiModalDirection(req.params["origin"],  req.params["destination"]);
    return res.send(finalDirection);
}) as RequestHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
