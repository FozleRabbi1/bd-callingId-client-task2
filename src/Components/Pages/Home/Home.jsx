import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import WhoWeAre from "./CardAnimaion/WhoWeAre";
import Services from "./Services/Services";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto  my-10 overflow-hidden">
        <Banner />
        <Brands />
      </div>
      <WhoWeAre />
      <div className="max-w-[1200px] mx-auto ">
        <Services />
      </div>
      <Featured />
    </div>
  );
};

export default Home;
