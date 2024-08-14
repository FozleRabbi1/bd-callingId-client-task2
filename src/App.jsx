import Home from "./Components/Pages/Home/Home";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from "react";
import { MdArrowUpward } from "react-icons/md";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          className="fixed bottom-4 right-4 size-12 rounded-full flex justify-center items-center bg-black border border-sky-400 duration-500 z-50"
        >
          <MdArrowUpward className="text-2xl text-white" />
        </button>
      )}

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







