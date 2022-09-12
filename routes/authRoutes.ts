import express, {RequestHandler} from "express";
import userSchema from '../models/user';
const authRouter = express.Router();
import * as bcrypt from 'bcrypt';

authRouter.post("/signup", (async (req, resp) => {
    if (req.session.user){
        resp.status(200).json({ msg: `Already Logged In: ${req.session.user}` });
    }

    const username: string = <string>req.body.username;
    const password: string = <string>req.body.password;

    if (!username || !password){
        resp.status(400).json({ msg: 'Username and password are required' });
    }

    const existingUser = userSchema.findOne({username: username});
    if (existingUser!=null) {
        resp.status(400).json({ msg: 'Username already exists' });
        return;
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10).then();
        const user = new userSchema({
            username,
            password: hashedPassword
        });
        
        const savedUser = await user.save();
        
        resp.status(201).json(savedUser);

    }catch(err){
        console.log(err.message);
        resp.status(500).json({ message: <string>err.message });
    }

}) as RequestHandler);


export default authRouter;