import { useState, useEffect } from "react";

export default function CustomCursorRing() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [delayedX, setDelayedX] = useState(0);
    const [delayedY, setDelayedY] = useState(0);

    // Set up a mouse move event listener
    useEffect(() => {
        const handleMouseMove = (e) => {
            // Use pageX and pageY to account for scroll position
            setMouseX(e.pageX);
            setMouseY(e.pageY);
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
                position: "absolute",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid blue",
                // backgroundColor: "black",
                mixBlendMode: "multiply",
                pointerEvents: "none",
                zIndex: 9999,
                transform: "translate(-50%, -50%)",
                left: `${delayedX}px`,
                top: `${delayedY}px`,
                transition: "left 0.1s ease-out, top 0.1s ease-out",
            }}
            className="custom-cursor"
        ></div>
    );
}
