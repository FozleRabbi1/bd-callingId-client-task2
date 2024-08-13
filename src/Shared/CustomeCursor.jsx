// import { useState } from "react";

// export default function CustomCursor() {
//   const [mousex, setMousex] = useState();
//   const [mousey, setMouseY] = useState();
//   const rect = document.body.getBoundingClientRect();
//   window.addEventListener("mousemove", setMousePosition);
//   function setMousePosition(e) {
//     setMousex(e.clientX - rect.left);
//     setMouseY(e.clientY - rect.top);
//   }
//   return (
//     <div
//       style={{
//         position: "absolute",
//         width: "10px",
//         height: "10px",
//         borderRadius: "50%",
//         // backgroundImage: `url('${imagePath}')`,
//         backgroundColor: "black",
//         mixBlendMode: "multiply",
//         backgroundSize: "cover",
//         pointerEvents: "none",
//         zIndex: 9999,
//         // display:`${visible}`,
//         transform: "translate(-50%, -50%)",
//         left: `${mousex}px`,
//         top: `${mousey}px`,
//         transition: "transform 1s ease-out",
//       }}
//       onMouseMove={setMousePosition}
//       className="custom-cursor"
//     ></div>
//   );
// }



// import { useState, useEffect } from "react";

// export default function CustomCursor() {
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);
//   const [delayedX, setDelayedX] = useState(0);
//   const [delayedY, setDelayedY] = useState(0);

//   // Set up a mouse move event listener
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMouseX(e.clientX);
//       setMouseY(e.clientY);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Update the delayed position with a delay effect
//   useEffect(() => {
//     const delay = 0.05;
//     const interval = setInterval(() => {
//       setDelayedX((prevX) => prevX + (mouseX - prevX) * delay);
//       setDelayedY((prevY) => prevY + (mouseY - prevY) * delay);
//     }, 10);

//     return () => clearInterval(interval);
//   }, [mouseX, mouseY]);

//   return (
//     <div
//       style={{
//         position: "absolute",
//         width: "10px",
//         height: "10px",
//         borderRadius: "50%",
//         backgroundColor: "black",
//         mixBlendMode: "multiply",
//         pointerEvents: "none",
//         zIndex: 9999,
//         transform: "translate(-50%, -50%)",
//         left: `${delayedX}px`,
//         top: `${delayedY}px`,
//         transition: "left 0.1s ease-out, top 0.1s ease-out",
//       }}
//       className="custom-cursor"
//     ></div>
//   );
// }



import { useState, useEffect } from "react";

export default function CustomCursor() {
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
    const delay = 0.04; // Adjust the delay value for smoother or faster effect
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
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "black",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        left: `${delayedX}px`,
        top: `${delayedY}px`,
        transition: "left 0.09s ease-out, top 0.09s ease-out",
      }}
      className="custom-cursor"
    ></div>
  );
}
