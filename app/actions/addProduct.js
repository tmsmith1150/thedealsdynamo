'use server';
import connectDB from "@/config/database";
import Product from "@/models/Product";
import { getSessionUser } from "@/utils/getSessionUser";
import { getSession } from "next-auth/react";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import cloudinary from "../../config/cloudinary";


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

    const imageUrls = [];

    for (const imageFile of images) {
        const imageBuffer = await imageFile.arrayBuffer();
        const imageArray = Array.from(new Uint8Array(imageBuffer));
        const imageData = Buffer.from(imageArray);

        const imageBase64 = imageData.toString('base64');

        const result = await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`, {
            folder: 'dealsdynamo'
        });

        imageUrls.push(result.secure_url);
    }

    productData.images = imageUrls;

    const newProduct = new Product(productData);
    await newProduct.save();

    revalidatePath('/', 'layout');

    redirect(`/products/${newProduct._id}`);

}

export default addProduct;