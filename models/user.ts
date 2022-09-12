import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    addresses: [
        {
            type: String
            //note for address and abstract address into another model?
        }
    ]
}, 
{
    collection: 'users'
});

export default mongoose.model('User', userSchema);
