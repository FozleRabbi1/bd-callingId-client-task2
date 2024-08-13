import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Testimonial = () => {

    const carasodDatas = [
        { id: 1, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
        { id: 2, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
        { id: 3, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
        { id: 4, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
    ]


    return (
        <div className="relative py-5 ">
            <div className="mb-14  overflow-hidden relative h-[150vh] flex justify-center items-center">
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
                    modules={[Navigation]}
                    className="mySwiper   w-[51%] "
                >

                    {
                        carasodDatas.map(item => (
                            <SwiperSlide key={item.id} className="overflow-hidden flex justify-center items-center text-center">

                                <div className="">
                                    <img className="size-16 mx-auto mb-10" src="https://i.ibb.co/ZHw23pN/comma-removebg-preview.png" alt="" />
                                    <div>
                                        <p className="text-xl leading-8 italic text-gray-600">{item.description}</p>
                                    </div>
                                    <h2 className="mt-10 text-black font-semibold text-2xl">{item.name}</h2>
                                    <h2 className="mt-1 text-sm text-gray-500">{item.role}</h2>

                                </div>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>


            </div>



            <div className="images  absolute top-0 left-0 w-full h-full ">
                <img className=" absolute w-52 h-44 left-[20%] top-[5%] " src="https://i.ibb.co/X8c1Rrf/office2.jpg" alt="" />
                <img className=" absolute w-32 h-28 right-[20%] top-[10%]  " src="https://i.ibb.co/zSphSFc/office.jpg" alt="" />
                <img className=" absolute w-32 h-28 left-[2%] top-[40%] " src="https://i.ibb.co/zHNWb8g/workplace.jpg" alt="" />
                <img className=" absolute w-44 h-80 left-[5%] bottom-[10%] " src="https://i.ibb.co/XyJ2wSf/work.jpg" alt="" />
                <img className=" absolute w-48 h-56 right-[5%] bottom-[30%] " src="https://i.ibb.co/M8FxW01/adda2.jpg" alt="" />
                <img className=" absolute w-36 h-44 right-[15%] bottom-[20%] " src="https://i.ibb.co/ZgTQ012/adda.jpg" alt="" />
            </div>

        </div>
    );
};

export default Testimonial;





// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// const Testimonial = () => {

//     const carasodDatas = [
//         { id: 1, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
//         { id: 2, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
//         { id: 3, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
//         { id: 4, name: "MARIA D. HALK", role: "MANAGING DIRECTOR", description: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!" },
//     ];

//     return (
//         <div className="relative bg-green-200 h-[100vh]">
//             <div className="mb-14 overflow-hidden relative h-full flex justify-center items-center">
//                 <Swiper
//                     spaceBetween={30}
//                     centeredSlides={true}
//                     autoplay={{
//                         delay: 4000,
//                         disableOnInteraction: false,
//                     }}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     navigation={{
//                         nextEl: ".swiper-button-next",
//                         prevEl: ".swiper-button-prev",
//                     }}
//                     speed={1500}
//                     modules={[Navigation]}
//                     className="mySwiper w-[51%] "
//                 >
//                     {carasodDatas.map(item => (
//                         <SwiperSlide key={item.id} className="overflow-hidden flex justify-center items-center text-center">
//                             <div>
//                                 <img className="size-16 mx-auto mb-10" src="https://i.ibb.co/ZHw23pN/comma-removebg-preview.png" alt="" />
//                                 <div>
//                                     <p className="text-xl leading-8 italic text-gray-600">{item.description}</p>
//                                 </div>
//                                 <h2 className="mt-10 text-black font-semibold text-2xl">{item.name}</h2>
//                                 <h2 className="mt-1 text-sm text-gray-500">{item.role}</h2>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>

//             {/* <button className="swiper-button-prev absolute bottom-10 left-10 bg-white px-4 py-2 rounded shadow-md">
//                 Previous
//             </button>
//             <button className="swiper-button-next absolute bottom-10 right-10 bg-white px-4 py-2 rounded shadow-md">
//                 Next
//             </button> */}
//         </div>
//     );
// };

// export default Testimonial;

