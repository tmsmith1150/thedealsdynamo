import ProductCard from '@/components/ProductCard';
import connectDB from '@/config/database';
import Product from '@/models/Product';

const ProductsPage = async () => {
    await connectDB();

    const products = await Product.find({}).lean();

    return ( 
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px04 py-6'>
                { products.length === 0 ? (
                    <p>No Products Found</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                     </div>
                )}
            </div>
        </section>
     );
}
 
export default ProductsPage;