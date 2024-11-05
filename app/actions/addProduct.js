'use server';
import connectDB from "@/config/database";
import Product from "@/models/Product";
import { getSessionUser } from "@/utils/getSessionUser";
import { getSession } from "next-auth/react";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


async function addProduct(formData) {
    await connectDB();
    
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;


    const images = formData
    .getAll('images')
    .filter((image) => image.name !== '')
    .map((image) => image.name);

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
        images
    };

    const newProduct = new Product(productData);
    await newProduct.save();

    revalidatePath('/', 'layout');

    redirect(`/products/${newProduct._id}`);

}

export default addProduct;