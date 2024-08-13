import "./Style.css";
import HoverEffectDiv from "../../../../Shared/AnimatedCard";
// import { useState } from "react";

const WhoWeAre = () => {

  // const [colors, setColors] = useState({})

  return (
    <>
      <div className="custom-scroll bg-black  ">
        <div className="lg:w-[85%] mx-auto flex justify-between">
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
    </>
  );
};

export default WhoWeAre;
