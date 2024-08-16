import { useState, useEffect } from "react";

export default function CustomCursorRing() {
    const [mouseX2, setMouseX2] = useState(0);
    const [mouseY2, setMouseY2] = useState(0);
    const [delayedX2, setDelayedX2] = useState(0);
    const [delayedY2, setDelayedY2] = useState(0);


    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouseX2(e.clientX);
            setMouseY2(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const delay = 0.30;
        const interval = setInterval(() => {
            setDelayedX2((prevX) => prevX + (mouseX2 - prevX) * delay);
            setDelayedY2((prevY) => prevY + (mouseY2 - prevY) * delay);
        }, 10);

        return () => clearInterval(interval);
    }, [mouseX2, mouseY2]);

    return (
        <div
            style={{
                position: "fixed",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid aqua",
                backgroundColor: "transparent",
                pointerEvents: "none",
                zIndex: 9999,
                transform: "translate(-50%, -50%)",
                left: `${delayedX2}px`,
                top: `${delayedY2}px`,
                transition: "left 0.1s ease-out, top 0.1s ease-out",
            }}
            className="custom-cursor-ring"
        ></div>
    );
}

