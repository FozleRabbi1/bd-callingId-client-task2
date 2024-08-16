/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
    return (
        <div className="bg-black  text-white ">

            <div className="grid grid-cols-12 text-center md:h-[60vh] px-[3%] " >

                <div className=" col-span-12 md:col-span-5 flex justify-center items-center flex-col" >
                    <h2 className="mr-auto mb-5 mt-10 md:mt-0">LOGO</h2>
                    <h2 className=" w-[80%] md:w-[90%] lg:w-[75%] mr-auto text-left text-gray-400 mb-10 lg:mb-0">When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</h2>

                </div>

                <div className=" col-span-12 md:col-span-2  flex flex-col justify-center items-center font-semibold">
                    <button className="flex-1 border py-5 md:border-t-0 border-gray-800 hover:bg-white hover:text-black w-full">facebook</button>
                    <button className="flex-1 border py-5 md:border-t-0 border-gray-800 hover:bg-white hover:text-black w-full">twitter</button>
                    <button className="flex-1 border py-5 md:border-t-0 border-gray-800 hover:bg-white hover:text-black w-full">linkdin</button>
                    <button className="flex-1 border py-5 md:border-b-0 border-gray-800 hover:bg-white hover:text-black w-full">instagram</button>
                </div>

                <div className=" col-span-12 md:col-span-5 flex justify-center items-center">
                    <div className="text-container text-[40px] lg:text-[80px] uppercase my-10 lg:my-0">
                        <span style={{ '--text': 1 }}>L</span>
                        <span style={{ '--text': 2 }}>E</span>
                        <span style={{ '--text': 3 }}>T</span>
                        <span style={{ '--text': 4 }}>'</span>
                        <span style={{ '--text': 5 }}>S</span>
                        <span style={{ '--text': 6 }}>-</span>
                        <span style={{ '--text': 7 }}>T</span>
                        <span style={{ '--text': 8 }}>A</span>
                        <span style={{ '--text': 9 }}>L</span>
                        <span style={{ '--text': 10 }}>K</span>
                    </div>

                </div>

            </div>

            <div className="border-t">
                <div className="px-[3%] py-16 flex flex-col-reverse justify-center lg:flex-row lg:justify-between">
                    <div className=" text-center lg:text-left flex flex-row lg:flex-col justify-center mt-5 lg:mt-0">
                        <h2>
                            © 2022 - 2025 | Alrights reserved
                        </h2>
                        <h2>
                            by Wealcoder
                        </h2>
                    </div>
                    <div>
                        <ul className="list-none flex justify-center lg:justify-end">
                            <li className=" mx-2 lg:ml-16 text-sm " >ABOUT US</li>
                            <li className=" mx-2 lg:ml-16 text-sm " >CONTACT US</li>
                            <li className=" mx-2 lg:ml-16 text-sm " >CAREER</li>
                            <li className=" mx-2 lg:ml-16 text-sm " >FAQS</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;