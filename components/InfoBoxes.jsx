import InfoBox from "./InfoBox";

const InfoBoxes = () => {
    return ( 
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <InfoBox heading='Place holder' buttonInfo={{
            text: 'Browse Products',
            link: '/products',
            backgroundColor: 'bg-black'
        }}>
            Browse all products</ InfoBox>
        <InfoBox heading='For Product Owners' backgroundColor='bg-blue-100' buttonInfo={{
            text: 'Add Product',
            link: '/products/add',
            backgroundColor: 'bg-blue-500'
        }}>List your products.</InfoBox>
        </div>
      </div>
    </section>
     );
}
 
export default InfoBoxes;