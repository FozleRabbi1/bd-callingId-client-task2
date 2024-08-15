import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/Nav";
import Footer from "../../Shared/Footer";
import { useEffect, useState } from "react";
import Aos from "aos";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {

    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        Aos.init();
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <NavBar scrollY={scrollY} />
            <Outlet />
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Main;