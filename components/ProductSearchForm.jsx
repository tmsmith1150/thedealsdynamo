'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';



const ProductSearchForm = () => {

    const [location, setLocation] = useState('');
    const [productType, setProductType] = useState('All');

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(location === '' && productType === 'All') {
            router.push('/products');
        }else {
            const query = `?location=${location}&productType=${productType}`;
            router.push(`/products/search-results${query}`);
        }
    }

    return ( 
        <form onSubmit={ handleSubmit }
          className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
        >
          <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="location" className="sr-only">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location (City, State, Zip, etc"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="w-full md:w-2/5 md:pl-2">
            <label htmlFor="product-type" className="sr-only">Product Type</label>
            <select
              id="product-type"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Upholstery">Upholstery</option>
                <option value="Casegoods">Casegoods</option>
                <option value="Area Rugs">Area Rugs</option>
                <option value="Wall Decor">Wall Decor</option>
                <option value="Lighting">Lighting</option>
                <option value="Accents">Accents</option>
                <option value="Florals">Florals</option>
                <option value="Bedding">Bedding</option>
                <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Search
          </button>
        </form>
     );
}
 
export default ProductSearchForm;