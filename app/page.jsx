import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";

const HomePage = () => {
    return ( 
        <div>
            <h1 className='text-3xl'>Welcome</h1>
          <Hero />
          <InfoBoxes />
        </div>
     );
}
 
export default HomePage;