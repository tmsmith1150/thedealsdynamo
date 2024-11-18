import ProductEditForm from "@/components/ProductEditForm";
import connectDB from "@/config/database";
import Product from "@/models/Product";
import { convertToSerializeableObject } from "@/utils/convertToObject";

const ProductEditPage = async props => {
    const params = await props.params;
    await connectDB();

    const productDoc = await Product.findById(params.id).lean();

    const product = convertToSerializeableObject(productDoc);

    if(!product) {
        return (
            <h1 className='text-center text-2xl font-bold mt-10'>
                Product Not Found
            </h1>
        )
    }

    return ( 
        <section className='bg-blue-50'>
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8" />
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <ProductEditForm product={product} />
                </div>
                </div>
                </section>
     );
}
 
export default ProductEditPage;