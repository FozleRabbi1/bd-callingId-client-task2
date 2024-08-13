import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import WhoWeAre from "./CardAnimaion/WhoWeAre";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto  my-10">
        <Banner />
        <Brands />
      </div>
      <WhoWeAre />

      <div className="max-w-[1200px] mx-auto ">
        <Services />

      </div>


    </div>
  );
};

export default Home;
