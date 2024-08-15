import "./Style.css";
import HoverEffectDiv from "../../../../Shared/AnimatedCard";

const WhoWeAre = () => {
  return (
    <div className="" >
      <div className="custom-scroll bg-black hidden xl:block ">
        <div className="lg:w-[85%]  mx-auto flex justify-between">

          <ul id="cards">

            <li className="card" id="card_1">
              <div className="card__content text-white">
                <div>
                  <h2
                    data-aos="fade-up-left"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                    className="text-white mt-[10px] pt-12 font-bold">Who We Are</h2>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="text-white  text-[35px] md:text-[56px] lg:text-[40px] leading-[40px] font-bold uppercase">
                    We are leading
                    digital marketing
                    agency.
                  </h2>

                  <div className="ml-20 border-l border-gray-400 h-[500px] pl-8">
                    <p
                      data-aos="zoom-in-up"
                      data-aos-duration="2000"
                      className="text-gray-400 mt-10 ">
                      We’re a team of strategic mdigital marketing
                      working globally with largest brands, We believe
                      that progress only happens when you refused
                      to play things safe. We combine ideas and
                      behaviors, and insights with design,
                      technological data to produce brand
                      experiences that customers love our services.
                    </p>
                    <HoverEffectDiv />
                  </div>

                </div>
              </div>
            </li>

            <li className="card  mt-[100px] mb-[800px]" id="card_2">
              <div className="card__content">
                <figure>
                  <img
                    src="https://cdn.create.vista.com/api/media/small/14226715/stock-photo-office-work"
                    alt="Image description"
                  />
                </figure>
              </div>
            </li>

          </ul>

        </div>
      </div>


      <div className="custom-scroll bg-black xl:hidden px-5  ">
        <div className=" lg:w-[100%]  mx-auto flex flex-col md:flex-row justify-between">

          <img
            className="py-10 md:py-36 w-full md:w-[70%] lg:w-[100%] mx-auto  h-[100vh] md:h-full"
            src="https://cdn.create.vista.com/api/media/small/14226715/stock-photo-office-work"
            alt="Image description"
          />

          <div className="overflow-hidden" id="">
            <div className=" md:mt-32 text-white">
              <div>
                <div className="pl-5 ">
                  <h2
                    data-aos="fade-up-left"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                    className="text-white md:mt-[10px] md:pt-12 pb-6 font-bold">Who We Are</h2>
                  <h2
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="text-white  text-[35px] md:text-[30px] lg:text-[40px] leading-[40px] font-bold uppercase">
                    We are leading
                    digital marketing
                    agency.
                  </h2>
                </div>
                <div className=" lg:ml-20 lg:border-l border-gray-400 h-[500px] pl-5 lg:pl-8">
                  <p
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                    className="text-gray-400 mt-10 mb-16 md:mb-0 ">
                    We’re a team of strategic mdigital marketing
                    working globally with largest brands, We believe
                    that progress only happens when you refused
                    to play things safe. We combine ideas and
                    behaviors, and insights with design,
                    technological data to produce brand
                    experiences that customers love our services.
                  </p>
                  <HoverEffectDiv />
                </div>

              </div>
            </div>
          </div>





        </div>
      </div>

    </div>
  );
};

export default WhoWeAre;
