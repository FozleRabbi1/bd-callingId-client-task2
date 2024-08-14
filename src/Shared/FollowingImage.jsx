/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function FollowingImage({ imageUrl, visible }) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [delayedX, setDelayedX] = useState(0);
    const [delayedY, setDelayedY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const delay = 0.30;
        const interval = setInterval(() => {
            setDelayedX((prevX) => prevX + (mouseX - prevX) * delay);
            setDelayedY((prevY) => prevY + (mouseY - prevY) * delay);
        }, 10);

        return () => clearInterval(interval);
    }, [mouseX, mouseY]);

    return (
        <div

            style={{

                position: "fixed",
                width: "300px",
                height: "400px",
                backgroundImage: `url('${imageUrl}')`,
                mixBlendMode: "multiply",
                backgroundSize: "cover",
                pointerEvents: "none",
                display: `${visible}`,
                transition: "opacity 0.5s ease-in-out",
                transform: "translate(-50%, -50%)",
                left: `${delayedX}px`,
                top: `${delayedY}px`,

            }}
        ></div>
    );
}




