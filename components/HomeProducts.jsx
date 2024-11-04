
import ProductCard from "./ProductCard";
import connectDB from '@/config/database';
import Product from "@/models/Product";
import Link from "next/link";

const HomeProducts = async () => {
    await connectDB();

    const recentProducts = await Product.find({})
    .sort({createdAt: -1})
    .limit(3)
    .lean();
    return ( 
        <>
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px04 py-6'>
                <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">Recent Products</h2>
                { recentProducts.length === 0 ? (
                    <p>No Products Found</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {recentProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                     </div>
                )}
            </div>
        </section>

                <section className='m-auto max-w-lg my-6 px-6'>
                 <Link href='/products' className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'>
                 View All Products
                 </Link>
                </section>
        </>
     );
}
 
export default HomeProducts;