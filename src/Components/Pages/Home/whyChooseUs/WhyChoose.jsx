/* eslint-disable react/prop-types */



import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Datas } from "./CarosulData";
import ContactHoverCard from "./ContactHoverCard";

const WhyChooseScrollBar = () => {

    return (
        <div>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#fffaf0]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {Datas?.map((product) => (
                        <Card product={product} key={product?.id} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};


const Card = ({ product }) => {
    return (
        <div
            className=" relative h-[95vh] overflow-hidden flex "
            style={{ margin: 0, padding: 0 }}
        >
            <div
                className="product-card flex justify-center items-center pt-10"
                style={{ backgroundColor: `#${product?.color}` }}
            >
                <div className="w-[75em] flex justify-center items-center flex-col ">
                    {
                        product.id === "1" && <>
                            <h2 className={`font-bold text-[150px] uppercase`}>{product.title}</h2>
                            <h2 className={`font-bold text-[150px] uppercase -mt-12`}>{product.title2}</h2>
                        </>
                    }
                    {
                        product.id === "2" && <div className="grid grid-cols-2 pt-10">

                            <div className="pl-10" >
                                <h2 className="font-bold  uppercase">{product.title}</h2>
                                <h2 className="font-bold  uppercase">{product.title1}</h2>
                                <h2 className="font-bold  uppercase mt-10 text-4xl">{product.title2}</h2>
                                <p className="w-[70%] pl-12 mt-10">{product.description}</p>
                                <div className="flex pl-12 mt-10 ">
                                    <button className="border border-black px-4 rounded-full " >Google</button>
                                    <button className="border border-black px-4 rounded-full " >pinterest</button>
                                    <button className="border border-black px-4 rounded-full " >Instagram</button>
                                </div>
                            </div>

                            <div className="">
                                <div className="flex items-center">
                                    <span className="size-36  border-black border-[3px] rounded-full flex justify-center items-center text-4xl font-bold ">{product.parsent[0]} %</span>
                                    <span className="w-[50%] ml-10">
                                        <h2 className="text-2xl uppercase font-bold"> {product.title3} </h2>
                                        <p className="text-sm leading-6">{product.titleDesCrip}</p>
                                    </span>
                                </div>
                                <div className="flex items-center my-10 -ml-20">
                                    <span className="size-36  border-black border-[3px] rounded-full flex justify-center items-center text-4xl font-bold ">{product.parsent[1]} %</span>
                                    <span className="w-[50%] ml-10">
                                        <h2 className="text-2xl uppercase font-bold"> {product.title4} </h2>
                                        <p className="text-sm leading-6">{product.titleDesCrip}</p>
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="size-36  border-black border-[3px] rounded-full flex justify-center items-center text-4xl font-bold ">{product.parsent[2]} %</span>
                                    <span className="w-[50%] ml-10">
                                        <h2 className="text-2xl uppercase font-bold"> {product.title5} </h2>
                                        <p className="text-sm leading-6">{product.titleDesCrip}</p>
                                    </span>
                                </div>
                            </div>

                        </div>
                    }
                    {
                        product.id === "3" && <div className=" grid grid-cols-3 pt-16 ">

                            <div className=" col-span-1 pl-10">
                                <h2 className="font-bold  uppercase ">{product.title}</h2>
                                <h2 className="font-bold  uppercase">{product.title1}</h2>

                                <div className="grid grid-cols-2 gap-10  h-full mt-16">
                                    <div>
                                        <h2 className="text-[50px]" >{product.price[0]}K</h2>
                                        <p className="-mt-2 w-[50%] font-semibold text-gray-500">{product?.sortSummery[0]}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-[50px]" >{product.price[1]}K</h2>
                                        <p className="-mt-2 w-[50%] font-semibold text-gray-500">{product?.sortSummery[1]}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-[50px]" >{product.price[2]}</h2>
                                        <p className="-mt-2 w-[50%] font-semibold text-gray-500">{product?.sortSummery[2]}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-[50px]" >{product.price[3]}</h2>
                                        <p className="-mt-2 w-[50%] font-semibold text-gray-500">{product?.sortSummery[3]}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-span-2">
                                <img src={product.image} alt="" />
                            </div>



                        </div>
                    }
                    {
                        product.id === "4" && <div className="text-center flex justify-center items-center flex-col">
                            <h2 className="text-2xl  mb-10">{product.title}</h2>
                            <h2 className="text-[60px]  mx-[15%]">{product.description}</h2>
                            <ContactHoverCard text="Contact Us" />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
export default WhyChooseScrollBar;