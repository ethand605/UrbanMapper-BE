import express, {RequestHandler} from "express";
import cors from "cors";
import {getMultiModalDirection} from "./services/directionServices";
import {PORT, MONGODB_URI, SESSION_SECRET} from "./utils/config";
import mongoose from "mongoose";
import session from 'express-session';
import MongoStore from "connect-mongo";

const app = express();

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((error) => {
        console.log("error connecting to MongoDB:", error.message);
    });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        client: mongoose.connection.getClient(),
        ttl: 60 * 60 * 24 * 7, //one week
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 //one week
    }
}));

app.get("/direction/:origin/:destination", ( async (req, res) => {
    const finalDirection = await getMultiModalDirection(req.params["origin"],  req.params["destination"]);
    return res.send(finalDirection);
}) as RequestHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
