/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const ContactHoverCard = ({ text }) => {
    const divRef = useRef(null);

    const handleMouseMove = (e) => {
        const divElement = divRef.current;
        const rect = divElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divElement.style.transform = `translate(${(x - rect.width / 2) / 5}px, ${(y - rect.height / 2) / 5}px)`;
    };

    const handleMouseLeave = () => {
        const divElement = divRef.current;
        divElement.style.transform = `translate(0px, 0px)`;
    };

    return (
        <div
            data-aos="fade-down"
            ref={divRef}
            className={`w-[170px] h-[170px]  rounded-full border-[2px] border-black flex justify-center items-center bg-transparent transition-transform duration-500 ease-out hover:bg-black cursor-pointer group z-50 `}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transition: 'background-color 0.5s ease-out, transform 0.5s ease-out',
            }}
        >
            <p className="text-black group-hover:text-white   duration-500">{text}</p>
            <MdOutlineArrowOutward className="text-black text-2xl ml-1 group-hover:text-white duration-500" />
        </div>
    );
};

export default ContactHoverCard;
