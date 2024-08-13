import Home from "./Components/Pages/Home/Home";
import Aos from "aos";
import 'aos/dist/aos.css';
import NavBar from "./Shared/Nav";
import { useEffect, useState, useRef } from "react";
import { MdArrowUpward } from "react-icons/md";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition2, setDelayedPosition2] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    Aos.init();

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateCursor = () => {
      const delayCursor = (current, target, delay) => current + (target - current) * delay;

      setDelayedPosition(prev => ({
        x: delayCursor(prev.x, mousePosition.x, 0.1),
        y: delayCursor(prev.y, mousePosition.y, 0.1),
      }));

      setDelayedPosition2(prev => ({
        x: delayCursor(prev.x, mousePosition.x, 0.5),
        y: delayCursor(prev.y, mousePosition.y, 0.5),
      }));

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    requestRef.current = requestAnimationFrame(updateCursor);

    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ fontFamily: "Kanit, sans-serif" }} className="text-black bg-white dark:bg-white dark:text-black">
      {scrollY >= 300 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 size-12 rounded-full flex justify-center items-center bg-black border border-sky-400 duration-500"
        >
          <MdArrowUpward className="text-2xl text-white" />
        </button>
      )}

      <NavBar scrollY={scrollY} />
      <div className="mt-32">
        <Home />
      </div>

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
          left: `${delayedPosition.x}px`,
          top: `${delayedPosition.y}px`,
        }}
        className="custom-cursor"
      ></div>

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
          left: `${delayedPosition2.x}px`,
          top: `${delayedPosition2.y}px`,
        }}
        className="custom-cursor-ring"
      ></div>
    </div>
  );
}

export default App;









//================================================>>>>>>>>>>>>>>>>> Just for practice


// import Home from "./Components/Pages/Home/Home";
// // import CustomeCursor from "./Shared/CustomeCursor"
// // import CustomCursorRing from "./Shared/CustomeCursorRing";
// import Aos from "aos";
// import 'aos/dist/aos.css';
// import NavBar from "./Shared/Nav";
// import { useEffect, useState } from "react";
// import { MdArrowUpward } from "react-icons/md";



// function App() {

//   Aos.init();
//   const [scrollY, setScrollY] = useState(0);
//   useEffect(() => {
//     const vartical = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener('scroll', vartical);
//     return () => {
//       window.removeEventListener('scroll', vartical);
//     };
//   }, [])

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };



//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);
//   const [delayedX, setDelayedX] = useState(0);
//   const [delayedY, setDelayedY] = useState(0);
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
//   useEffect(() => {
//     const delay = 0.04;
//     const interval = setInterval(() => {
//       setDelayedX((prevX) => prevX + (mouseX - prevX) * delay);
//       setDelayedY((prevY) => prevY + (mouseY - prevY) * delay);
//     }, 10);

//     return () => clearInterval(interval);
//   }, [mouseX, mouseY]);


//   const [mouseX2, setMouseX2] = useState(0);
//   const [mouseY2, setMouseY2] = useState(0);
//   const [delayedX2, setDelayedX2] = useState(0);
//   const [delayedY2, setDelayedY2] = useState(0);

//   // Set up a mouse move event listener
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMouseX2(e.clientX);
//       setMouseY2(e.clientY);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const delay = 0.30;
//     const interval = setInterval(() => {
//       setDelayedX2((prevX) => prevX + (mouseX2 - prevX) * delay);
//       setDelayedY2((prevY) => prevY + (mouseY2 - prevY) * delay);
//     }, 10);

//     return () => clearInterval(interval);
//   }, [mouseX2, mouseY2]);




//   return (
//     <div style={{ fontFamily: "Kanit, sans-serif" }} className=" text-black bg-white dark:bg-white dark:text-black">
//       {
//         scrollY >= 300 && <button
//           onClick={scrollToTop}
//           className="fixed bottom-4 right-4 size-12 rounded-full flex justify-center items-center bg-black  border border-sky-400 duration-500">
//           <MdArrowUpward className="text-2xl text-white" />
//         </button>
//       }

//       {/* <CustomeCursor /> */}
//       {/* <CustomCursorRing /> */}
//       <NavBar scrollY={scrollY} />
//       <div className="mt-32">
//         <Home />
//       </div>



//       <div
//         style={{
//           position: "fixed",
//           width: "10px",
//           height: "10px",
//           borderRadius: "50%",
//           backgroundColor: "aqua",
//           pointerEvents: "none",
//           zIndex: 99999999,
//           transform: "translate(-50%, -50%)",
//           left: `${delayedX}px`,
//           top: `${delayedY}px`,
//           transition: "left 0.09s ease-out, top 0.09s ease-out",
//         }}
//         className="custom-cursor"
//       ></div>

//       <div
//         style={{
//           position: "fixed",
//           width: "40px",
//           height: "40px",
//           borderRadius: "50%",
//           border: "1px solid aqua",
//           backgroundColor: "transparent",
//           pointerEvents: "none",
//           zIndex: 9999,
//           transform: "translate(-50%, -50%)",
//           left: `${delayedX2}px`,
//           top: `${delayedY2}px`,
//           transition: "left 0.1s ease-out, top 0.1s ease-out",
//         }}
//         className="custom-cursor-ring"
//       ></div>


//     </div>
//   );
// }

// export default App;



// ===================================================================>>>>>>>

// import Home from "./Components/Pages/Home/Home";
// import Aos from "aos";
// import 'aos/dist/aos.css';
// import NavBar from "./Shared/Nav";
// import { useEffect, useState } from "react";
// import { MdArrowUpward } from "react-icons/md";

// function App() {
//   const [scrollY, setScrollY] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
//   const [delayedPosition2, setDelayedPosition2] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     Aos.init();

//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const delayCursor = (current, target, delay) => current + (target - current) * delay;

//     const interval = setInterval(() => {
//       setDelayedPosition(prev => ({
//         x: delayCursor(prev.x, mousePosition.x, 0.04),
//         y: delayCursor(prev.y, mousePosition.y, 0.04),
//       }));

//       setDelayedPosition2(prev => ({
//         x: delayCursor(prev.x, mousePosition.x, 0.3),
//         y: delayCursor(prev.y, mousePosition.y, 0.3),
//       }));
//     }, 10);

//     return () => clearInterval(interval);
//   }, [mousePosition]);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div style={{ fontFamily: "Kanit, sans-serif" }} className="text-black bg-white dark:bg-white dark:text-black">
//       {scrollY >= 300 && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-4 right-4 size-12 rounded-full flex justify-center items-center bg-black border border-sky-400 duration-500"
//         >
//           <MdArrowUpward className="text-2xl text-white" />
//         </button>
//       )}

//       <NavBar scrollY={scrollY} />
//       <div className="mt-32">
//         <Home />
//       </div>

//       <div
//         style={{
//           position: "fixed",
//           width: "10px",
//           height: "10px",
//           borderRadius: "50%",
//           backgroundColor: "aqua",
//           pointerEvents: "none",
//           zIndex: 99999999,
//           transform: "translate(-50%, -50%)",
//           left: `${delayedPosition.x}px`,
//           top: `${delayedPosition.y}px`,
//           transition: "left 0.09s ease-out, top 0.09s ease-out",
//         }}
//         className="custom-cursor"
//       ></div>

//       <div
//         style={{
//           position: "fixed",
//           width: "40px",
//           height: "40px",
//           borderRadius: "50%",
//           border: "1px solid aqua",
//           backgroundColor: "transparent",
//           pointerEvents: "none",
//           zIndex: 9999,
//           transform: "translate(-50%, -50%)",
//           left: `${delayedPosition2.x}px`,
//           top: `${delayedPosition2.y}px`,
//           transition: "left 0.1s ease-out, top 0.1s ease-out",
//         }}
//         className="custom-cursor-ring"
//       ></div>
//     </div>
//   );
// }

// export default App;

// ===================================================================>>>>>>>







