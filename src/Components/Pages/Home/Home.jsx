import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import WhoWeAre from "./CardAnimaion/WhoWeAre";
import Services from "./Services/Services";
import Featured from "./Featured/Featured";
import Testimonial from "./Testimuniyal/Testimonial";
import PricingTable from "./PricingTable/PricingTable";
import WhyChooseUs from "./Extra/Extra";

const Home = () => {
  return (
    <div>
      <div className=" lg:max-w-[1200px] mx-auto  my-10 ">
        <Banner />
        <Brands />
      </div>
      <WhoWeAre />
      <div className="lg:max-w-[1200px] mx-auto ">
        <Services />
      </div>
      <Featured />
      <Testimonial />
      <WhyChooseUs />


      <PricingTable />

    </div>
  );
};

export default Home;
