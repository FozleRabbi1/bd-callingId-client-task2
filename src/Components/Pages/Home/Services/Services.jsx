
import { useState } from "react";
import FollowingImage from "../../../../Shared/FollowingImage";
import AnimatedCard from "./AnimatedCard";

const Services = () => {
    const [imageUrl, setCursorImg] = useState('');
    const [customCursor, setCustomCursor] = useState('none');

    const datas = [
        {
            id: 1,
            title: "Search Engine Optimization",
            description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            ulli: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
            image: "https://media.istockphoto.com/id/1490901300/photo/young-colleagues-cooperating-while-working-on-a-computer-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=WQ_42khug17ZsOrr039hqO3AlqBi3Zs2oxR500C6Ag0="
        },
        {
            id: 2,
            title: "Social Marketing",
            description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            ulli: ["+ Logo Design", "+ Advertisement", "+ Promotion 2"],
            image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/O2019-Hero-image-x2:VP1-539x440?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=720&qlt=75&fit=constrain"
        },
        {
            id: 3,
            title: "Social Marketing",
            description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            ulli: ["+ Logo Design", "+ Advertisement", "+ Promotion 2"],
            image: "https://media.istockphoto.com/id/641945126/photo/when-the-customer-calls-direct-them-here.webp?b=1&s=170667a&w=0&k=20&c=Qsr0bUsWL6UBp0CX_Ip6GbXI4uQl2mQHBamjAU5TfYY="
        },
    ]
    return (
        <div className="lg:pb-40 overflow-hidden px-5 lg:px-16 ">
            <div className=" md:h-[50vh] lg:h-[80vh] py-10 flex justify-center items-center flex-col lg:relative lg:mb-40  ">

                <div className=" w-full lg:w-[35%]  lg:-mt-24 lg:-ml-16">
                    <h2 data-aos="zoom-in-left" data-aos-duration="2000" className="text-xl text-gray-500">Services</h2>
                    <h2 data-aos="zoom-in-left" data-aos-duration="2000" className="text-[36px] uppercase font-bold lg:font-extrabold">Our Marketing Services</h2>
                </div>

                {/* <div className="border-l w-[50%] lg:absolute right-32 -bottom-10 "> */}
                <div className="lg:border-l lg:w-[50%] lg:absolute lg:right-32 lg:-bottom-10 ">
                    <p data-aos="zoom-in" data-aos-duration="2000" className="  lg:py-20 lg:px-20 text-justify ">
                        Consumers today rely heavily on digital means to
                        research products. We research a brand before engaging
                        with it, according to the data. Meanwhile, 51% of consumers
                        say they use Google to research products before buying.
                    </p>
                </div>

            </div>
            <div className="mb-10">
                {
                    datas.map(data => (
                        <div key={data.id}
                            onMouseEnter={() => setCursorImg(data.image)}
                            onMouseOver={() => { setCustomCursor('block') }}
                            onMouseLeave={() => { setCustomCursor('none') }}
                            className="grid grid-cols-12 items-center border-y py-10 z-40 " >
                            <h2
                                data-aos="zoom-in-right"
                                data-aos-duration="2000"
                                className="text-[30px]  lg:w-[70%] uppercase font-bold col-span-12 md:col-span-4">{data.title}</h2>

                            <div
                                data-aos="zoom-in-right"
                                data-aos-duration="2000"
                                className="col-span-12 md:col-span-5 xl:col-span-6 font-semibold text-gray-600 ">
                                <h2 className="w-[80%] lg:w-[60%] mt-5 md:mt-0">{data.description}</h2>

                                <ul className="list-none my-8 lg:mt-4 ">
                                    {
                                        data.ulli?.map(item => <li key={item} >{item}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="col-span-12 md:col-span-3 xl:col-span-2 flex lg:justify-end " >
                                <AnimatedCard />
                            </div>
                            <div className="hidden lg:block">
                                <FollowingImage imageUrl={imageUrl} visible={customCursor} ></FollowingImage>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;