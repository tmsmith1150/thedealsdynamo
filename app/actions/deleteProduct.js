'use server';
import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Product from "@/models/Product";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteProduct(productId){
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;

    await connectDB();

    const product = await Product.findById(productId);

    if(!product) throw new Error('Product Not Found');

    if(product.store.toString() !== userId) {
        throw new Error('Unauthorized');
    }

     //Extract public id from image urls
     const publicIds = product.images.map((imageUrl) => {
        const parts = imageUrl.split('/');
        return parts.at(-1).split('.').at(0);
    });

    //Delete images from cloudinary
    if(publicIds.length > 0) {
        for (let publicId of publicIds) {
            await cloudinary.uploader.destroy('dealsdynamo' + publicId)
        }
    }

    await product.deleteOne();

   
    revalidatePath('/', 'layout')

}

export default deleteProduct;
