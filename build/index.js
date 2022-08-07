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
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const express_1 = __importDefault(require("express"));
const resource_1 = require("./resource");
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
function getDefaultTransitDirection(resp) {
    const steps = resp.routes[0].legs[0].steps;
    steps.forEach((step) => {
        if (step.travel_mode === 'WALKING') {
            const options = `origin=${step.start_location.lat},${step.start_location.lng}
            &destination=${step.end_location.lat},${step.end_location.lng}
            &mode=bicycling`;
            // console.log(baseURL+options+"\n");
            getBicyclingDirection(resource_1.baseURL + options)
                .then()
                .catch(err => console.log(err));
        }
        else {
            console.log(step.start_location, step.end_location, step.duration, step.distance, step.travel_mode, "\n");
        }
    });
}
function getBicyclingDirection(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const resp = yield axios_1.default.get(url);
        const data = yield resp.data;
        const legs = data.routes[0].legs[0];
        // console.log(`${legs.start_location.lat},${legs.start_location.lng},${legs.end_location.lat},${legs.end_location.lng},${legs.duration},${legs.distance},${legs.travel_mode}`);
        console.log(`${legs.start_address},${legs.end_address},${legs.distance.text},${legs.duration.text}`);
    });
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
    getDefaultTransitDirection(resource_1.resp);
});
