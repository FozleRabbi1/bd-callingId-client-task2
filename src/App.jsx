import Home from "./Components/Pages/Home/Home";
import NavBar from "./Shared/Nav";
import CustomeCursor from "./Shared/CustomeCursor"
import CustomCursorRing from "./Shared/CustomeCursorRing";
import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  Aos.init();
  return (
    <div style={{ fontFamily: "Kanit, sans-serif" }} className="px-10  text-black">
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
