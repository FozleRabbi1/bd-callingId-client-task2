// import { useState, useEffect } from "react";

// export default function CustomCursorRing() {
//     const [mouseX, setMouseX] = useState(0);
//     const [mouseY, setMouseY] = useState(0);
//     const [delayedX, setDelayedX] = useState(0);
//     const [delayedY, setDelayedY] = useState(0);

//     // Set up a mouse move event listener
//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             // Use pageX and pageY to account for scroll position
//             setMouseX(e.pageX);
//             setMouseY(e.pageY);
//         };

//         window.addEventListener("mousemove", handleMouseMove);

//         return () => {
//             window.removeEventListener("mousemove", handleMouseMove);
//         };
//     }, []);

//     // Update the delayed position with a delay effect
//     useEffect(() => {
//         const delay = 0.30; // Adjust the delay value for smoother or faster effect
//         const interval = setInterval(() => {
//             setDelayedX((prevX) => prevX + (mouseX - prevX) * delay);
//             setDelayedY((prevY) => prevY + (mouseY - prevY) * delay);
//         }, 10);

//         return () => clearInterval(interval);
//     }, [mouseX, mouseY]);

//     return (
//         <div
//             style={{
//                 position: "absolute",
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 border: "1px solid aqua", // Adjust the color as needed
//                 backgroundColor: "transparent", // Make the background transparent
//                 pointerEvents: "none",
//                 zIndex: 9999,
//                 transform: "translate(-50%, -50%)",
//                 left: `${delayedX}px`,
//                 top: `${delayedY}px`,
//                 // boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)", // Add a shadow for better visibility
//                 transition: "left 0.1s ease-out, top 0.1s ease-out",
//             }}
//             className="custom-cursor-ring"
//         ></div>
//     );
// }


import { useState, useEffect } from "react";

export default function CustomCursorRing() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [delayedX, setDelayedX] = useState(0);
    const [delayedY, setDelayedY] = useState(0);

    // Set up a mouse move event listener
    useEffect(() => {
        const handleMouseMove = (e) => {
            // Use clientX and clientY to get position relative to the viewport
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Update the delayed position with a delay effect
    useEffect(() => {
        const delay = 0.30; // Adjust the delay value for smoother or faster effect
        const interval = setInterval(() => {
            setDelayedX((prevX) => prevX + (mouseX - prevX) * delay);
            setDelayedY((prevY) => prevY + (mouseY - prevY) * delay);
        }, 10);

        return () => clearInterval(interval);
    }, [mouseX, mouseY]);

    return (
        <div
            style={{
                position: "fixed", // Changed to fixed to keep it relative to the viewport
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid aqua", // Adjust the color as needed
                backgroundColor: "transparent", // Make the background transparent
                pointerEvents: "none",
                zIndex: 9999,
                transform: "translate(-50%, -50%)",
                left: `${delayedX}px`,
                top: `${delayedY}px`,
                // boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)", // Uncomment if needed
                transition: "left 0.1s ease-out, top 0.1s ease-out",
            }}
            className="custom-cursor-ring"
        ></div>
    );
}
