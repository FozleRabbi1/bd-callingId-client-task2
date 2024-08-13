import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

const Featured = () => {
    const [currentIndex, setActiveIndex] = useState(0);


    const carasodDatas = [
        { id: 1, title: "Bengon", title2: "Website", title3: "2024", image: "https://i.ibb.co/t8dMrZy/model3.jpg" },
        { id: 2, title: "Bengon", title2: "Website", title3: "2024", image: "https://i.ibb.co/xHBgkB1/model2.webp" },
        { id: 3, title: "Bengon", title2: "Website", title3: "2024", image: "https://i.ibb.co/pZq2wBp/model1.jpg" },
        { id: 4, title: "Bengon", title2: "Website", title3: "2024", image: "https://i.ibb.co/xHBgkB1/model2.webp" },
    ]

    return (
        <div className="bg-black text-white p-20 ">
            <div className="relative">
                <h2 className="text-xl font-bold uppercase" >Featured <br /> Work</h2>
                <div className="absolute left-[30%] z-30">
                    <h2 className=" flex  " > <span className="text-6xl font-semibold mr-3">{currentIndex + 1} / </span> <span className="text-2xl font-semibold mr-2">{carasodDatas?.length}</span> </h2>
                </div>


                <div className="mb-14  overflow-hidden relative">

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
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper  h-[100vh] "
                    >

                        {
                            carasodDatas.map(item => (
                                <SwiperSlide key={item.id} className=" overflow-hidden">

                                    <div className="relative flex justify-between ">
                                        <div className="z-30">
                                            <h2 className="text-[120px] font-bold uppercase -mr-5 mt-10" >{item.title}</h2>
                                            <h2 className="text-[120px] font-bold uppercase -mr-52 text-right">{item.title2}</h2>
                                            <h2 className="text-[120px] font-bold uppercase -mr-5">{item.title3}</h2>
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


                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Featured;

// https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/background-2.jpg
