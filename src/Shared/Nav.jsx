/* eslint-disable react/prop-types */

import { CiSearch } from "react-icons/ci";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";



const NavBar = ({ scrollY }) => {


  return (
    <div className={`bg-white fixed top-0 left-0 w-full z-50 ${scrollY >= 100 ? "border-b" : ""}  duration-300`}>
      <div className="navbar lg:px-14">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <Link to="/">
            <img
              src="https://i.ibb.co/qNNxyzp/logo2-removebg-preview.png"
              alt=""
            />
          </Link>
        </div>

        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/products"> Products </Link>
            </li>

            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end ">
          <button className="border-r mr-2">
            <CiSearch className="text-2xl  mr-3 " />
          </button>
          <button>
            <HiMiniBars3BottomRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
