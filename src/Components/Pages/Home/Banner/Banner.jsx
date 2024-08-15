import { AiFillCaretRight } from "react-icons/ai";
import { HiOutlineArrowDown } from "react-icons/hi";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" px-2 md:px-5 lg:px-10 xl:px-5 overflow-hidden">
      <div className="">

        <div className="flex justify-between items-center">
          <h2 className="flex items-center text-xl font-extrabold  ">
            DIGITAL{" "}
            <span className="w-[100px] h-[1px] bg-black block ml-10"> </span>{" "}
          </h2>

          <img

            src="https://i.ibb.co/6nBwYXB/star-removebg-preview.png"
            alt=""
          />
        </div>

        <div className="flex justify-between items-center">
          <h2 className="slide-right-to-left font-bold md:font-extrabold text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] p-0 -mt-6 lg:-mt-16 ">
            MARK
          </h2>

          <div className="hidden md:block">
            <div className="flex justify-between items-center ">
              <div className="size-32 bg-blue-950 rounded-full flex justify-center items-center z-10">
                <button>
                  <span className="size-10 bg-black rounded-full flex justify-center items-center">
                    <AiFillCaretRight className="text-white text-xl" />
                  </span>
                </button>
              </div>

              <div className="ml-2 font-bold">
                <h2>WATCH</h2>
                <h2>VIDEO INTRO</h2>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center -mt-10  xl:-mt-32  ">

        <div className="slide-right-to-left2 text-balance ">
          <p className=" md:w-[300px] px-2 md:px-0 text-justify leading-5 md:leading-6 opacity-80 font-sans font-semibold">
            Static and dynamic secure code review can prevent a day before your
            product is even released. We can integrate with your dev code review
            a is even released.
          </p>
        </div>

        <h2 className="slide-right-to-left2 font-bold md:font-extrabold text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] -mr-20 md:mr-0 ">
          ETING
        </h2>

      </div>

      <div className=" flex justify-between items-center  lg:-mt-28 ">
        <div className="hidden : lg:block">
          <span className="block up-down-animation h-[100px] w-[45px] border border-black flex justify-center items-center rounded-full opacity-60">
            {" "}
            <HiOutlineArrowDown className="text-3xl " />{" "}
          </span>
        </div>

        <img
          className="w-full lg:w-[80%] h-[250px] lg:h-[300px] mt-10 md:mt-14"
          src="https://i.ibb.co/V3GmPn2/long-Image.jpg"
          alt=""
        />
      </div>

    </div>
  );
};

export default Banner;
