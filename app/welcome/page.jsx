import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProducts from "@/components/HomeProducts";


const WelcomePage = () => {
    return ( 
        <div>
            <h1 className='text-3xl'>Welcome</h1>
          <Hero />
          <InfoBoxes />
          <HomeProducts />
        </div>
     );
}
 
export default WelcomePage;