import { useRef } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const HoverEffectDiv = () => {
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
            ref={divRef}
            className={`w-[200px] h-[200px] mt-10 rounded-full border flex justify-center items-center bg-black transition-transform duration-500 ease-out hover:bg-white cursor-pointer group`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transition: 'background-color 0.5s ease-out, transform 0.5s ease-out',
            }}
        >
            <p className="text-gray-400 group-hover:text-black transition-colors duration-500">Explore Us</p>
            <MdOutlineArrowOutward className="text-gray-300 text-2xl ml-1 group-hover:text-black duration-500" />
        </div>
    );
};

export default HoverEffectDiv;







// ================================================>>>>>>>>> just for practice
// import { useRef } from 'react';
// import { MdOutlineArrowOutward } from 'react-icons/md';

// const HoverEffectDiv = () => {
//     const divRef = useRef(null);

//     const handleMouseMove = (e) => {
//         const divElement = divRef.current;
//         const rect = divElement.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         // Smaller translation for a smaller movement area
//         divElement.style.transform = `translate(${(x - rect.width / 2) / 5}px, ${(y - rect.height / 2) / 5}px)`;
//     };

//     const handleMouseLeave = () => {
//         const divElement = divRef.current;
//         // Smoothly return to the original position
//         divElement.style.transform = `translate(0px, 0px)`;
//     };

//     return (
//         <div
//             ref={divRef}
//             className="size-[200px] mt-10 rounded-full border flex justify-center items-center hover:bg-white duration-500 group transition-transform ease-out"
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//         >
//             <p className="text-gray-400 group-hover:text-black">Explore Us</p>
//             <MdOutlineArrowOutward className="text-gray-400 text-2xl ml-1 group-hover:text-black" />
//         </div>
//     );
// };

// export default HoverEffectDiv;







