import express, {RequestHandler} from "express";
const addressRouter = express.Router();

//for testing purposes, delete later
addressRouter.get('/currentUser', (req, res) => {
    console.log("current user", req.user);
    res.send(req.user);
});

//req.user is set by the userExtractor middleware
addressRouter.get('/', (req, res) => {
    return res.send(req.user.addresses);
});

addressRouter.post('/', ( async (req, res) => {
    //check if address already exists
    console.log(<string>req.body.address);
    console.log(req.user.addresses);
    req.user.addresses.push({address: <string>req.body.address});
    console.log("updated user", req.user);
    const savedUser = await req.user.save();
    res.send(savedUser.addresses);
}) as RequestHandler);

addressRouter.delete('/', ( async (req, res) => {
    req.user.addresses = req.user.addresses.filter((address) => address.address !== req.body.address);
    const savedUser = await req.user.save();
    res.send(savedUser.addresses);
}) as RequestHandler);

addressRouter.put('/', ( async (req, res) => {
    const newAddress: string = <string>req.body.newAddress;
    const oldAddress: string = <string>req.body.oldAddress;
    
    req.user.addresses = req.user.addresses.map((addrObj) => addrObj.address === oldAddress ? {address: newAddress} : addrObj);
    const savedUser = await req.user.save();
    res.send(savedUser.addresses);
}) as RequestHandler);


export default addressRouter;