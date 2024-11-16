import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';
import connectDB from '@/config/database';
import Product from '@/models/Product';

const ProductsPage = async ({ searchParams: { page = 1, pageSize = 12 } }) => {
    await connectDB();

    const skip = (page - 1) *pageSize;
    const total = await Product.countDocuments({});

    const products = await Product.find({}).skip(skip).limit(pageSize);

    const showPagination = total > pageSize;

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
                {showPagination && (<Pagination page={parseInt(page)} pageSize={parseInt(pageSize)} totalItems={total} />)}
                
            </div>
        </section>
     );
}
 
export default ProductsPage;