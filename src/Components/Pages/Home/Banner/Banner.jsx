import { AiFillCaretRight } from "react-icons/ai";
import { HiOutlineArrowDown } from "react-icons/hi";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="">
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
          <h2 className="slide-right-to-left font-extrabold text-[220px] p-0 -mt-16 ">
            MARK
          </h2>
          <div className="flex justify-between items-center">
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

      <div className="flex justify-between items-center -mt-32  ">
        <div className="slide-right-to-left2 text-balance ">
          <p className=" w-[300px] text-justify leading-6 opacity-80 font-sans font-semibold">
            Static and dynamic secure code review can prevent a day before your
            product is even released. We can integrate with your dev code review
            a is even released.
          </p>
        </div>

        <h2 className="slide-right-to-left2 font-extrabold text-[220px]   ">
          ETING
        </h2>
      </div>

      <div className=" flex justify-between items-center  -mt-28 ">
        <span className="up-down-animation h-[100px] w-[45px] border border-black block flex justify-center items-center rounded-full opacity-60">
          {" "}
          <HiOutlineArrowDown className="text-3xl " />{" "}
        </span>

        <img
          className="w-[80%] h-[300px]"
          src="https://i.ibb.co/V3GmPn2/long-Image.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
