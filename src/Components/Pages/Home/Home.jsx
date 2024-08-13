import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import EightSec from "./CardAnimaion/WhoWeAre";

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto  my-10">
      <Banner />
      <Brands />
      <EightSec />
      <div className="h-[100vh] bg-green-300 w-full"></div>
    </div>
  );
};

export default Home;
