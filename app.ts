import express from "express";
import cors from "cors";
import {PORT, MONGODB_URI, SESSION_SECRET} from "./utils/config";
import mongoose from "mongoose";
import session from 'express-session';
import MongoStore from "connect-mongo";
import directionRouter from "./controllers/directions";
import authRouter from "./controllers/auth";
import userExtractor from "./utils/middlewares";
import addressRouter from "./controllers/addresses";
const app = express();

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("connected to MongoDB");
    })
    .catch((error) => {
        console.log("error connecting to MongoDB:", error.message);
    });

app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200
}));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        dbName: 'urbanMapper_storage',
        client: mongoose.connection.getClient(),
        mongoUrl: MONGODB_URI,
        collectionName: 'sessions',
        ttl: 60 * 60 * 24 * 7, //one week, TODO: add these in env
    }),
    cookie: {
        // sameSite: 'none',
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 //TODO: add these in env, one week
    }
}));

app.use('/direction', directionRouter);
app.use('/auth', authRouter);
app.use('/addresses', userExtractor, addressRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
