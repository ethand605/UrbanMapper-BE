import { NextFunction } from "express";
import userSchema, {User}  from '../models/user';
import {Request, Response} from "express";


const userExtractor = (req: Request, resp:Response , next: NextFunction) => {
    if (req.session) {
        const userName: string = req.session.user.username;
        userSchema.findOne({ username: userName })
            .then((user: User) => {
                req.user = user;
                next();
            })
            .catch((err: Error) => {
                resp.status(500).json({ message: "Not authenticated "+ err.message });
            });
    }

  
};

//add an errorHandler middleware?

export default userExtractor;
