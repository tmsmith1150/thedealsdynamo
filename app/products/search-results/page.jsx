import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductSearchForm from "@/components/ProductSearchForm";
import connectDB from "@/config/database";
import Product from "@/models/Product";
import { convertToSerializableObject } from "@/utils/convertToObject";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const SearchResultsPage = async ({ searchParams: { location, productType },
}) => {

    await connectDB();

    const locationPattern = new RegExp(location,'i');

    let query = {
        $or: [
            {'storeinfo.name': locationPattern},
            {name: locationPattern},

        ],
    };

    if (productType && productType !== 'All') {
        const typePattern = new RegExp(productType, 'i');
        query.type = typePattern;
    }

    const productsQueryResults = await Product.find(query).lean();
    const products = productsQueryResults.map(convertToSerializableObject);
    console.log(products);

    return (  <>
    <section className='bg-blue-700 py-4'>
    <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
        <ProductSearchForm />
        </div>
        </section>
        <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <Link
            href='/products'
            className='flex items-center text-blue-500 hover:underline mb-3'
          >
            <FaArrowAltCircleLeft className='mr-2 mb-1' /> Back To Products
          </Link>
          <h1 className='text-2xl mb-4'>Search Results</h1>
          {products.length === 0 ? (
            <p>No search results found</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      </>
       );
}
 
export default SearchResultsPage;