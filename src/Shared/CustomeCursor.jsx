import { useState, useEffect } from "react";

export default function CustomCursor() {
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
    const delay = 0.04;
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
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "aqua",
        pointerEvents: "none",
        zIndex: 99999999,
        transform: "translate(-50%, -50%)",
        left: `${delayedX}px`,
        top: `${delayedY}px`,
        transition: "left 0.09s ease-out, top 0.09s ease-out",
      }}
      className="custom-cursor"
    ></div>
  );
}
