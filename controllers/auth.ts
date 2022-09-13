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
    console.log(req.body);
    const existingUser = await userSchema.findOne({username});
    console.log(existingUser);
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

authRouter.post("/login", (async (req, resp) => {
    const username: string = <string>req.body.username;
    const password: string = <string>req.body.password;

    if (!username || !password) {
        resp.status(400).json({ msg: 'Missing username or password' });
    }

    const user = await userSchema.findOne({username: username}); 
    if (!user) {
        resp.status(400).json({ msg: 'User not found' });
        return;
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (matchPassword) {
        const userSession = {username: user.username}; 
        req.session.user = userSession; 

        resp.status(200).json({ msg: 'Logged in successfully', userSession });
        return;
    } else {
        resp.status(400).json({ msg: 'Invalid credential' });
        return;
    }

}) as RequestHandler);

authRouter.delete("/logout",  (req, resp) => {
    req.session.destroy((err) => {
        if (err) {
            resp.status(400).json({ msg: 'Error logging out' });
        } else {
            resp.status(200).json({ msg: 'Logged out successfully' });
        }
    });
});

//for testing purposes, delete later
authRouter.get("/isAuth", (req, resp) => {
    resp.json(req.session.user);
});


export default authRouter;