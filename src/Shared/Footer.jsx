/* eslint-disable react/no-unescaped-entities */

const Footer = () => {
    return (
        <div className="bg-black  text-white ">

            <div className="grid grid-cols-12 text-center h-[60vh] px-[3%] " >
                <div className="col-span-5 flex justify-center items-center flex-col" >
                    <h2 className="mr-auto mb-5">LOGO</h2>
                    <h2 className="mr-[200px] text-left text-gray-400">When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</h2>

                </div>

                <div className="col-span-2  flex flex-col justify-center items-center font-semibold">
                    <button className="flex-1 border border-t-0 hover:bg-white hover:text-black w-full">facebook</button>
                    <button className="flex-1 border border-t-0 hover:bg-white hover:text-black w-full">twitter</button>
                    <button className="flex-1 border border-t-0 hover:bg-white hover:text-black w-full">linkdin</button>
                    <button className="flex-1 border border-b-0 hover:bg-white hover:text-black w-full">instagram</button>
                </div>

                <div className="col-span-5 flex justify-center items-center">
                    <h2 className="text-[80px] uppercase"> Let's Talk </h2>
                </div>
            </div>

            <div className="border-t">
                <div className="px-[3%] py-16 flex justify-between">
                    <div>
                        <h2>
                            © 2022 - 2025 | Alrights reserved
                        </h2>
                        <h2>
                            by Wealcoder
                        </h2>
                    </div>
                    <div>
                        <ul className="list-none flex">
                            <li className="ml-16 text-sm " >ABOUT US</li>
                            <li className="ml-16 text-sm " >CONTACT US</li>
                            <li className="ml-16 text-sm " >CAREER</li>
                            <li className="ml-16 text-sm " >FAQS</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;