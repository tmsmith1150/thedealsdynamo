import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema ({
    email:{
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
      },
      image: {
        type: String,
      },
    products: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Product',
    },
],
},
{
    timestamps: true,
}
);

const User = models.User || model('User', UserSchema);

export default User;