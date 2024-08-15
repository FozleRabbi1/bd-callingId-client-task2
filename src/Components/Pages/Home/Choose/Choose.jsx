import { Datas } from "../whyChooseUs/CarosulData";
import ContactHoverCard from "../whyChooseUs/ContactHoverCard";

const Choose = () => {

    return (
        <div className="">
            {Datas?.map((product) => (

                <div
                    key={product.id}
                    className=" relative  overflow-hidden flex  "
                >
                    <div
                        className="product-card flex justify-center items-center w-[100%]"
                        style={{ backgroundColor: `#${product?.color}` }}
                    >
                        <div className="w-[75em] flex justify-center items-center flex-col ">

                            {
                                product.id === "2" && <div className="">

                                    <div className="" >
                                        <h2 className="font-bold  uppercase text-center mt-10 text-3xl"> {product.title} {product.title1}</h2>
                                        <h2 className="font-bold  uppercase my-10 text-2xl text-center ">{product.title2}</h2>
                                        <p className="px-5">{product.description}</p>
                                        <div className="flex pl-12 my-10 ">
                                            <button className="border border-black px-4 rounded-full " >Google</button>
                                            <button className="border border-black px-4 rounded-full " >pinterest</button>
                                            <button className="border border-black px-4 rounded-full " >Instagram</button>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <div className="flex items-center">
                                            <span className="size-32  border-black border-[3px] rounded-full flex justify-center items-center text-4xl font-bold ">{product.parsent[0]} %</span>
                                            <span className="w-[50%] ml-10">
                                                <h2 className="text-2xl uppercase font-bold"> {product.title3} </h2>
                                                <p className="text-sm leading-6">{product.titleDesCrip}</p>
                                            </span>
                                        </div>
                                        <div className="flex items-center my-10 ">
                                            <span className="size-32  border-black border-[3px] rounded-full flex justify-center items-center text-4xl font-bold ">{product.parsent[1]} %</span>
                                            <span className="w-[50%] ml-10">
                                                <h2 className="text-2xl uppercase font-bold"> {product.title4} </h2>
                                                <p className="text-sm leading-6">{product.titleDesCrip}</p>
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="size-32  border-black border-[3px] rounded-full flex justify-center items-center text-4xl font-bold ">{product.parsent[2]} %</span>
                                            <span className="w-[50%] ml-10">
                                                <h2 className="text-2xl uppercase font-bold"> {product.title5} </h2>
                                                <p className="text-sm leading-6">{product.titleDesCrip}</p>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            }
                            {
                                product.id === "3" && <div className=" pb-10 ">

                                    <div className=" col-span-1 pl-10">

                                        <div className="grid grid-cols-2 gap-10  h-full my-16">
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


                                    <div className="col-span-2 px-5">
                                        <img src={product.image} alt="" />
                                    </div>



                                </div>
                            }
                            {
                                product.id === "4" && <div className="text-center flex justify-center items-center flex-col pt-10 pb-16 bg-green-50">
                                    <h2 className="text-2xl  mb-10">{product.title}</h2>
                                    <h2 className="text-[40px]  mx-[5%] mb-10">{product.description}</h2>
                                    <ContactHoverCard text="Contact Us" />
                                </div>
                            }
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default Choose;