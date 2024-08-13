import Home from "./Components/Pages/Home/Home";
import CustomeCursor from "./Shared/CustomeCursor"
import CustomCursorRing from "./Shared/CustomeCursorRing";
import Aos from "aos";
import 'aos/dist/aos.css';
import NavBar from "./Shared/Nav";
import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";



function App() {



  Aos.init();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const vartical = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', vartical);
    return () => {
      window.removeEventListener('scroll', vartical);
    };
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ fontFamily: "Kanit, sans-serif" }} className=" text-black bg-white dark:bg-white dark:text-black">
      {
        scrollY >= 300 && <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 size-12 rounded-full flex justify-center items-center bg-black  border border-sky-400 duration-500">
          <MdArrowUpward className="text-2xl text-white" />
        </button>
      }
      <CustomeCursor />
      <CustomCursorRing />
      <NavBar scrollY={scrollY} />
      <div className="mt-32">
        <Home />
      </div>
    </div>
  );
}

export default App;
