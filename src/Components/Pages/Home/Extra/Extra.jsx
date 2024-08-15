import Choose from "../Choose/Choose";
import WhyChooseScrollBar from "../whyChooseUs/WhyChoose";

const WhyChooseUs = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <WhyChooseScrollBar />

            </div>
            <div className="block lg:hidden">
                <Choose />
            </div>
        </div>
    );
};

export default WhyChooseUs;