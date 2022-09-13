import "express-serve-static-core";
import {User}  from '../models/user';

declare module "express-serve-static-core" {
    export interface Request {
        user?: User
    }
}
