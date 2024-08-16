import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Testimonial = () => {
    const swiperRef = useRef(null);
    const carasodDatas = [
        { id: 1, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
        { id: 2, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
        { id: 3, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
        { id: 4, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },

    ]

    return (
        <div className="relative py-5  ">
            <div className="mb-14  overflow-hidden h-[90vh] md:h-[150vh] flex justify-center items-center">
                <div className="w-[80%] md:w-[50%]  relative">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        speed={2500}
                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper  "
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {carasodDatas.map((item) => (
                            <SwiperSlide key={item.id} className="overflow-hidden flex justify-center items-center text-center">
                                <div>
                                    <img className="size-16 mx-auto mb-5 md:mb-10" src="https://i.ibb.co/ZHw23pN/comma-removebg-preview.png" alt="" />
                                    <div>
                                        <p className="text-xl leading-8 italic text-black ">{item.description}</p>
                                    </div>
                                    <h2 className="mt-10 text-black font-semibold text-2xl">{item.name}</h2>
                                    <h2 className="mt-1 text-sm text-gray-500">{item.role}</h2>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center mt-4 z-40 absolute -bottom-20 left-1/2 -translate-x-1/2">
                        <button
                            onClick={() => swiperRef.current.slideNext()}
                            className="size-12 border border-black duration-300 flex justify-center items-center rounded-full mr-2 text-xl bg-white hover:bg-black text-black hover:text-white"
                        >
                            <IoMdArrowBack />
                        </button>
                        <button
                            onClick={() => swiperRef.current.slidePrev()}
                            className="size-12 border border-black duration-300 flex justify-center items-center rounded-full mr-4 text-xl bg-white hover:bg-black text-black hover:text-white "
                        >
                            <IoMdArrowForward />
                        </button>
                    </div>
                </div>
            </div>
            <div className="images  absolute top-0 left-0 w-full h-full hidden lg:block ">
                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    className=" absolute w-52 h-44 left-[20%] top-[5%] " src="https://i.ibb.co/X8c1Rrf/office2.jpg" alt="" />
                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000" className=" absolute w-32 h-28 right-[20%] top-[10%]  " src="https://i.ibb.co/zSphSFc/office.jpg" alt="" />
                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000" className=" absolute w-32 h-28 left-[2%] top-[40%] " src="https://i.ibb.co/zHNWb8g/workplace.jpg" alt="" />
                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000" className=" absolute w-44 h-80 left-[5%] bottom-[10%] " src="https://i.ibb.co/XyJ2wSf/work.jpg" alt="" />
                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000" className=" absolute w-48 h-56 right-[5%] bottom-[30%] " src="https://i.ibb.co/M8FxW01/adda2.jpg" alt="" />
                <img
                    data-aos="zoom-in"
                    data-aos-duration="2000" className=" absolute w-36 h-44 right-[15%] bottom-[20%] " src="https://i.ibb.co/ZgTQ012/adda.jpg" alt="" />
            </div>
        </div>
    );
};

export default Testimonial;
