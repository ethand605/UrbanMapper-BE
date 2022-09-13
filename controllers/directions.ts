import {getMultiModalDirection} from "../services/directionServices";
import express, {RequestHandler} from "express";

const directionRouter = express.Router();

directionRouter.get('/:origin/:destination', ( async (req, res) => {
    const finalDirection = await getMultiModalDirection(req.params["origin"],  req.params["destination"]);
    return res.send(finalDirection);
}) as RequestHandler);

export default directionRouter;