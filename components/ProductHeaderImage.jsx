import Image from "next/image";

const ProductHeaderImage = ({ image }) => {
    return ( 
        <section>
      <div className="container-xl m-auto">
        <div className="max-w-full flex justify-center">
          <Image
            src={image}
            alt=""
            className="object-scale-down h-[400px] w-auto"
            width={0}
            height={0}
            sizes='100vw'
          />
        </div>
      </div>
    </section>
     );
}
 
export default ProductHeaderImage;