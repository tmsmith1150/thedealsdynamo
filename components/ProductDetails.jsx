const ProductDetails = ({ product }) => {
    return ( 
        <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{product.type}</div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <div
                className="text-gray-500 mb-4 flex align-middle space-x-32"
              >
                <p className="text-orange-700">
                SKU: {product.sku}
                </p>
                <p className="text-orange-700">
                SN: {product.serial}
                </p>
              </div>

              <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
              Floor Sample
              </h3>
              <div className="flex flex-col md:flex-row justify-around">
                <div
                  className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                >
                  <div className="text-gray-500 mr-2 font-bold">Retail Price</div>
                  <div className="text-2xl font-bold text-blue-500">{product.regular}</div>
                </div>
                <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                  <div className="text-gray-500 mr-2 font-bold">Floor Sample Price</div>
                  <div className="text-2xl font-bold text-blue-500">{product.disc}</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <div className='flex justify-between'>
              <h3 className="text-lg font-bold mb-6">Description & Details</h3>
              <h3 className="text-lg font-medium mb-6">Location: {product.storeinfo.name}</h3>
              </div>
              <div
                className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9"
              >
                <p>Options: 
                  <span className="hidden sm:inline">{product.options}</span>
                </p>
              </div>
              <p className="text-gray-500 mb-4">
                {product.description}
              </p>
            </div>
          </main>
     );
}
 
export default ProductDetails;