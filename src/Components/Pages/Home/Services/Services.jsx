import HoverEffectDiv from "../../../../Shared/AnimatedCard";

const Services = () => {
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


            <div>

                <h2>Search Engine
                    Optimization</h2>

                <div>
                    <h2>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.</h2>

                    <ul className="list-none">
                        <li>+ Logo Design</li>
                        <li>+ Advertisement</li>
                        <li>+ Promotion</li>
                    </ul>
                </div>

                <HoverEffectDiv bgColor="white" hoverColor="black" />



            </div>











        </div>

    );
};

export default Services;