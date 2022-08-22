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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const directionServices_1 = require("./services/directionServices");
// import {baseURL, resp} from "./resource";
const app = (0, express_1.default)();
app.use(express_1.default.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use((0, cors_1.default)());
const PORT = 3000;
const testDirection = () => __awaiter(void 0, void 0, void 0, function* () {
    const finalDirection = yield (0, directionServices_1.convertToMultimodalDirection)(yield (0, directionServices_1.getDefaultTransitDirection)("Alton Pkwy 5051", "Donald Bren Hall, Irvine, CA"));
    console.log(JSON.stringify(finalDirection, null, 4));
    console.log("duration", finalDirection.duration / 60, "\narrival", new Date(finalDirection.arrival_time * 1000).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', }), "\ndeparture", new Date(finalDirection.departure_time * 1000).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', }));
});
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
