import ProductHeaderImage from "@/components/ProductHeaderImage";
import ProductDetails from "@/components/ProductDetails";
import ProductImages from "@/components/ProductImages";
import BookmarkButton from "@/components/BookMarkButton";
import ShareButtons from "@/components/ShareButtons";
import ProductContactForm from "@/components/ProductContactForm";
import connectDB from "@/config/database";
import Product from "@/models/Product";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { convertToSerializeableObject } from "@/utils/convertToObject";


const ProductPage = async props => {
  const params = await props.params;
  await connectDB();

  const productDoc = await Product.findById(params.id).lean();
  const product = convertToSerializeableObject(productDoc);

  if (!product) {
    return (<h1 className='text-center textg-2xl font-bold mt-10'>Product Not Found</h1>)
  }

  return  ( 
      <>
      <ProductHeaderImage image={product.images[0]} />
      {/* <!-- Go Back --> */}
  <section>
    <div className="container m-auto py-6 px-6">
      <Link
        href="/products"
        className="text-blue-500 hover:text-blue-600 flex items-center"
      >
        <FaArrowLeft className='mr-2' /> Back to Products
      </Link>
    </div>
  </section>
  <section className="bg-blue-50">
    <div className="container m-auto py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
       <ProductDetails product={product} />
       <aside className="space-y-4 ml-16">
        <BookmarkButton product={product} />
        <ShareButtons product={product} />
        <ProductContactForm product={product} />

       </aside>
      </div>
      </div>
      </section>
      <ProductImages images={product.images} />
      </>
   );
}
 
export default ProductPage;