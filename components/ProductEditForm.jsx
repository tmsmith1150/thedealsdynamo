import updateProduct from "@/app/actions/updateProduct";

const ProductEditForm = ({ product }) => {

    const updateProductById = updateProduct.bind(null, product._id);

    return ( 
        <form action={updateProductById}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Edit Product
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
                >Product Type</label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                defaultValue={product.type}
                required
              >
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
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder=""
                defaultValue={product.name}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Sku Number</label>
              <input
                type="text"
                id="sku"
                name="sku"
                className="border rounded w-full py-2 px-3 mb-2"
                defaultValue={product.sku}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Serial Number</label>
              <input
                type="text"
                id="serial"
                name="serial"
                className="border rounded w-full py-2 px-3 mb-2"
                defaultValue={product.serial}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Options</label>
              <input
                type="text"
                id="options"
                name="options"
                className="border rounded w-full py-2 px-3 mb-2"
                defaultValue={product.options}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                defaultValue={product.description}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Regular Retail</label>
              <input
                type="text"
                id="regular"
                name="regular"
                className="border rounded w-full py-2 px-3 mb-2"
                defaultValue={product.regular}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-700 font-bold mb-2"
                >Floor Sample Price</label>
              <input
                type="text"
                id="disc"
                name="disc"
                className="border rounded w-full py-2 px-3 mb-2"
                defaultValue={product.disc}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="images" className="block text-gray-700 font-bold mb-2"
                >Images (Select up to 4 images)</label>
              <input
                type="file"
                id="images"
                name="images"
                className="border rounded w-full py-2 px-3"
                accept="image/*"
                multiple
              />
            </div>
            
            <div>
            <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
              Store Information
              </h3>
            </div>


            <div className="mb-4">
              <label
                htmlFor="storeinfo_name"
                className="block text-gray-700 font-bold mb-2"
                >Store Number</label>
              <input
                type="text"
                id="storeinfo_name"
                name="storeinfo.name"
                className="border rounded w-full py-2 px-3"
                defaultValue={product.location}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="storeinfo_email"
                className="block text-gray-700 font-bold mb-2"
                >Store Email</label>
              <input
                type="email"
                id="storeinfo_email"
                name="storeinfo.email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="storeinfo_phone"
                className="block text-gray-700 font-bold mb-2"
                >Store Phone</label>
              <input
                type="tel"
                id="storeinfo_phone"
                name="storeinfo.phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Phone"
              />
            </div>

            

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Product
              </button>
            </div>
          </form>
     );
}
 
export default ProductEditForm;