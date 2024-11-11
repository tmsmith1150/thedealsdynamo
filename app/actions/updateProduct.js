'use server';
import connectDB from "@/config/database";
import Product from "@/models/Product";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';


async function updateProduct(productId, formData) {
    await connectDB();
    
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;

    const existingProduct = await Product.findById(productId);

    //Verify store
    if(existingProduct.store.toString() !== userId) {
        throw new Error('Unauthorized')
    }
    const productData = {
        store: userId,
        type: formData.get('type'),
        name: formData.get('name'),
        sku: formData.get('sku'),
        serial: formData.get('serial'),
        options: formData.get('options'),
        description: formData.get('description'),
        regular: formData.get('regular'),
        disc: formData.get('disc'),
        storeinfo: {
        name: formData.get('storeinfo.name'),
        email: formData.get('storeinfo.email'),
        phone: formData.get('storeinfo.phone'),
        },
    };

    const updatedProduct = await Product.findByIdAndUpdate(productId, productData)

    revalidatePath('/', 'layout');

    redirect(`/products/${updatedProduct._id}`)
}

export default updateProduct;