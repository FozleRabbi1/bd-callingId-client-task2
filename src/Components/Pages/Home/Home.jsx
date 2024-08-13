// import AnimatedCard from "../../../Shared/AnimatedCard";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import WhoWeAre from "./CardAnimaion/WhoWeAre";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto  my-10">
        <Banner />
        <Brands />
      </div>
      <WhoWeAre />

      <div className="h-[100vh] bg-green-300 w-full">
        {/* <AnimatedCard /> */}
      </div>
    </div>
  );
};

export default Home;
