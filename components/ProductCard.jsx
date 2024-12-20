import Image from "next/image";
import Link from "next/link";


const ProductCard  = ({product}) => {
    return ( 
          <div className="rounded-xl shadow-md relative">
            <Link
                  href={`/products/${product._id}`}
                >
            <Image
            src={product.images[0]}
              alt=""
              width='0'
              height='0'
              sizes='100vw'
              maxwidth='100%'
              className='w-full h-auto rounded-t-xl'
            />
            </Link>
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">{product.type}</div>
                <div className="flex space-x-36  text-gray-500 mb-4">
                <p>
                  <span className="md:hidden lg:inline">SKU: {product.sku}</span>
                </p>
                <p>
                  <span className="md:hidden lg:inline">SN: {product.serial}</span>
                </p>
              </div>
                <h3 className="text-xl font-bold">{product.name}</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-3xl text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                ${product.disc}
              </h3>

              <div
                className="flex justify-start gap-4 text-green-900 text-sm mb-4"
              >
                <p>FAB/FIN/OPT: {product.options}</p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex flex-col align-middle gap-2 mb-4 lg:mb-0">
                  <div>
                  <span className="text-gray-700">Reg Retail: ${product.regular}</span>
                  </div>
                  <div>
                  <span className="text-gray-700">Location: {product.storeinfo.name}</span>
                  </div>
                </div>
                <Link
                  href={`/products/${product._id}`}
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
     );
}
 
export default ProductCard;