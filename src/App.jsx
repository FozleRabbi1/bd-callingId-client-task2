import Home from "./Components/Pages/Home/Home";
import CustomeCursor from "./Shared/CustomeCursor"
import CustomCursorRing from "./Shared/CustomeCursorRing";
import Aos from "aos";
import 'aos/dist/aos.css';
import NavBar from "./Shared/Nav";

function App() {
  Aos.init();
  return (
    <div style={{ fontFamily: "Kanit, sans-serif" }} className=" text-black bg-white dark:bg-white dark:text-black">
      <CustomeCursor />
      <CustomCursorRing />
      <NavBar />

      <div className="mt-32">
        <Home />

      </div>

    </div>
  );
}

export default App;
