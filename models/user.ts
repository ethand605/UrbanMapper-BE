import { Schema, model, Document  } from 'mongoose';

export interface User extends Document{
    username: string,
    password: string,
    addresses? : {
        address: string
    }[]
}

const userSchema = new Schema<User>({
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
            address: String,
			// unique: true
            //add note field for address and abstract address into another model?
        }
    ]
}, 
{
    collection: 'users'
});

export default model('User', userSchema);
