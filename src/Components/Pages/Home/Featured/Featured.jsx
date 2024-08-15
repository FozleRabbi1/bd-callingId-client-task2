
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import './Featured.css'

const Featured = () => {
    const [activeIndex, setActiveIndex] = useState(0);




    const carasodDatas = [
        { id: 1, title: "Bengon", title2: "Website", title3: "2024", image: "https://i.ibb.co/t8dMrZy/model3.jpg" },
        { id: 2, title: "Bengon", title2: "Website", title3: "2024", image: "https://i.ibb.co/xHBgkB1/model2.webp" },
        { id: 3, title: "Bengon", title2: "Website", title3: "2024", image: "https://i.ibb.co/pZq2wBp/model1.jpg" },
        { id: 4, title: "Bengon", title2: "Website", title3: "2024", image: "https://i.ibb.co/xHBgkB1/model2.webp" },
    ];

    return (
        <div className="bg-black text-white px-5 md:px-16 lg:p-20 ">
            <div className="relative">
                <h2 className="text-xl font-bold uppercase" >Featured <br /> Work</h2>
                <div className="absolute left-[30%] z-30">
                    <h2 className="flex">
                        <span className="text-6xl font-semibold mr-3">{activeIndex + 1} / </span>
                        <span className="text-2xl font-semibold mr-2">{carasodDatas?.length}</span>
                    </h2>
                </div>

                <div className="mb-14 overflow-hidden relative">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        speed={1500}
                        loop={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper h-[100vh]"
                    >
                        {carasodDatas.map((item) => (
                            // <SwiperSlide key={item.id} className="overflow-hidden bg-red-300 w-full">
                            //     <div className="relative flex md:justify-between">

                            //         <div className="z-30 bg-green-200  ">

                            //             <h2 className={`text-[50px] md:text-[70px] lg:text-[120px] font-bold uppercase mt-[100%] lg:-mr-5 md:mt-16 -mb-16`}>
                            //                 {item.title}
                            //             </h2>
                            //             <h2 className="text-[50px] md:text-[70px] lg:text-[120px] font-bold uppercase -mr-32 lg:-mr-52 mt-10 md:mt-16 text-right">
                            //                 {item.title2}
                            //             </h2>
                            //             <h2 className="text-[50px] md:text-[70px] lg:text-[120px] font-bold uppercase -mt-10 lg:-mr-5 lg:-mt-16">
                            //                 {item.title3}
                            //             </h2>

                            //         </div>

                            //         <img
                            //             className="h-[100vh] w-[100%] md:w-[60%]"
                            //             src={item.image}
                            //             alt=""
                            //         />
                            //     </div>
                            // </SwiperSlide>

                            <SwiperSlide key={item.id} className="overflow-hidden w-full">
                                <div className="relative flex flex-col md:flex-row md:justify-between">

                                    {/* Text Section */}
                                    <div className="absolute md:relative z-30 w-full h-full flex flex-col justify-center items-start md:w-auto md:h-auto">
                                        <h2 className="text-white  text-[50px] md:text-[70px] lg:text-[120px] font-bold uppercase mt-4 md:ml-0">
                                            {item.title}
                                        </h2>
                                        <h2 className="text-white  text-[50px] md:text-[70px] lg:text-[120px] font-bold uppercase -my-4 md:mt-4 -ml-32 md:-my-10 self-center md:self-end   md:-mr-20 lg:-mr-52 text-right">
                                            {item.title2}
                                        </h2>
                                        <h2 className="text-white text-[50px] md:text-[70px] lg:text-[120px] font-bold uppercase md:mt-4 md:ml-0">
                                            {item.title3}
                                        </h2>
                                    </div>

                                    {/* Image Section */}
                                    <img
                                        className="h-[100vh] w-full md:w-[60%] object-cover"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>


                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Featured;




//=================================================>>>>>>>> Just for testing

{/* <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        speed={1500}
                        loop={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper  h-[100vh] "
                    >

                        {
                            carasodDatas.map(item => (
                                <SwiperSlide key={item.id} className=" overflow-hidden">

                                    <div className="relative flex justify-between ">
                                        <div className="z-30">
                                            <h2
                                                className="text-[120px] font-bold uppercase -mr-5 mt-16 -mb-16" >{item.title}</h2>
                                            <h2 className="text-[120px] font-bold uppercase -mr-52 text-right">{item.title2}</h2>
                                            <h2 className="text-[120px] font-bold uppercase -mr-5 -mt-16">{item.title3}</h2>
                                        </div>
                                        <img
                                            className="h-[100vh] w-[60%]"
                                            src={item.image}
                                            alt=""
                                        />

                                    </div>
                                </SwiperSlide>
                            ))
                        }


                    </Swiper> */}