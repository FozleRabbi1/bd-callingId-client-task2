import { IoMdCheckmark } from "react-icons/io";
import ContactHoverCard from "../whyChooseUs/ContactHoverCard";

const PricingTable = () => {
    return (
        <div className="py-[50px] lg:py-[150px] bg-[#f3ecec]">
            <div className="lg:max-w-[1200px] px-4 mg:px-10 mx-auto grid lg:grid-cols-2 gap-10 md:gap-20" >
                <div>
                    <h2 className="uppercase font-semibold opacity-70">Pricing Table</h2>
                    <h1 className="uppercase text-[30px] lg:text-[46px] font-bold lg:w-[80%] leading-[50px] mt-2 md:mt-5">Be kind to your
                        mind</h1>
                    <div className="mt-10 lg:mt-14">
                        <div className="collapse collapse-plus  border-t border-black rounded-none px-0 ">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-md font-semibold">Design should enrich our day</div>
                            <div className="collapse-content opacity-70  font-[500]">
                                <p>Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border-t border-black rounded-none">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-md font-semibold">Bring their individual experience and creative</div>
                            <div className="collapse-content opacity-70  font-[500]">
                                <p >This is the second  accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border-t border-black rounded-none">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-md font-semibold">Human centred design to challenges</div>
                            <div className="collapse-content opacity-70  font-[500]">
                                <p>This is the second  accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border-t border-black rounded-none">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-md font-semibold">Developing core web applications</div>
                            <div className="collapse-content opacity-70">
                                <p>This is the second  accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus border-t border-black rounded-none">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-md font-semibold">Bring their individual experience and creative</div>
                            <div className="collapse-content opacity-70  font-[500]">
                                <p>This is the second  accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        className="bg-black text-white rounded-md relative">
                        <div className="flex items-center py-10 ">
                            <span className="mx-8 bg-orange-500 p-3 rounded-md">
                                <IoMdCheckmark />
                            </span>
                            <div>
                                <button className="text-xs uppercase text-gray-400 border-[1.5px] px-4 py-[4px] mb-5 rounded-full ">yearly</button>
                                <h2 className="text-xl uppercase font-bold">14 days free</h2>
                                <p className="opacity-80 mt-4 w-[90%] lg:w-[70%] ">Subscription fee is $129.99 USD and automatically renews each year.</p>
                            </div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold absolute top-[15%] lg:top-[20%] right-[10%]">
                            $129.99
                        </h2>
                        <h2
                            className="bg-orange-400 absolute top-0 right-2 transform -translate-x-1/2 -translate-y-1/2 px-2 rounded py-1">
                            best value
                        </h2>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        className="bg-white text-black rounded-md relative mt-5">
                        <div className="flex items-center py-10 ">
                            <span className="mx-8 bg-orange-500 p-3 rounded-md">
                                <IoMdCheckmark />
                            </span>
                            <div>
                                <button className="text-xs uppercase text-black border-[1.5px] border-black px-4 py-[4px] mb-5 rounded-full ">monthly</button>
                                <h2 className="text-xl uppercase font-bold">7 days free</h2>
                                <p className="opacity-80 mt-4 w-[90%] lg:w-[70%] ">Subscription fee is $129.99 USD and automatically renews each year.</p>
                            </div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold absolute top-[15%] lg:top-[20%] right-[10%]">
                            $12.99
                        </h2>
                    </div>
                    <div className="mt-10 md:mt-20">
                        <ContactHoverCard text="try it free now" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingTable;