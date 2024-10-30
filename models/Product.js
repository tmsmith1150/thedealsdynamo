import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema (
{
   store: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
   },
   name: {
    type: String
   },
   type: {
    type: String
   },
   sku: {
    type: String
   },
   description: {
    type: String
   },
   location: {
    type: String
   },
   regular: {
    type: String
   },
   disc: {
    type: String
   },
   options: {
    type: String
   },
   serial: {
    type: String
   },
   storeinfo: {
    name: String,
    email: String,
    phone: String
   },
   images: [
    {
        type: String
    }
   ],
},
{
    timestamps: true,
}
);

const Product = models.Product || model('Product', ProductSchema);

export default Product;