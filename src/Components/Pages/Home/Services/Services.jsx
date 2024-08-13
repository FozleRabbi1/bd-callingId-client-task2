
import AnimatedCard from "./AnimatedCard";

const Services = () => {

    const datas = [
        {
            id: 1,
            title: "Search Engine Optimization",
            description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            ulli: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
            image : "https://media.istockphoto.com/id/1490901300/photo/young-colleagues-cooperating-while-working-on-a-computer-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=WQ_42khug17ZsOrr039hqO3AlqBi3Zs2oxR500C6Ag0="
        },
        {
            id: 2,
            title: "Search Engine Optimization",
            description: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            ulli: ["+ Logo Design", "+ Advertisement", "+ Promotion"],
            image : "https://media.istockphoto.com/id/1490901300/photo/young-colleagues-cooperating-while-working-on-a-computer-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=WQ_42khug17ZsOrr039hqO3AlqBi3Zs2oxR500C6Ag0="
        },
    ]

    return (
        <div>
            <div className="h-[80vh] flex justify-center items-center flex-col relative mb-20 ">
                <div className=" w-[35%] p-4 -mt-24 -ml-16">
                    <h2 className="text-xl text-gray-500">Services</h2>
                    <h2 className="text-[36px] uppercase font-extrabold">Our Marketing Services</h2>
                </div>

                <div className="border-l w-[50%] absolute right-32 -bottom-10 ">
                    <p className="  py-20 px-20 text-justify ">
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

                        <div key={data.id} className="grid grid-cols-12 items-center border-y py-10 " >
                            <h2 className="text-[30px] uppercase font-bold col-span-4">Search Engine
                                Optimization</h2>

                            <div className="col-span-6 font-semibold text-gray-600 ">
                                <h2 className="w-[60%]">We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</h2>

                                <ul className="list-none mt-4">
                                    <li>+ Logo Design</li>
                                    <li>+ Advertisement</li>
                                    <li>+ Promotion</li>
                                </ul>
                            </div>
                            <AnimatedCard className="col-span-4" />
                        </div>
                    ))
                }




            </div>











        </div>

    );
};

export default Services;