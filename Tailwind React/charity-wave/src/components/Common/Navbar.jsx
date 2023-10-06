import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="w-screen h-[80px] text-white bg-transparent fixed drop-shadow-lg top-0 z-50 my-5">
        <div className="flex justify-around md:justify-center items-center w-full h-full">
          <div className="flex items-center md:w-2/3 xl:w-1/2 justify-between">
            <h1 className="text-xl font-bold lg:mr-4 lg:text-3xl">
              <Link to="/"> Charity Wave</Link>
            </h1>
            <ul className="hidden md:flex justify-between">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>Support</li>
            </ul>
          </div>

          {/* <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-white mr-4">
              Sign In
            </button>
            <button className="px-8 py-3 font-medium">Sign Up</button>
          </div> */}

          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-primary w-screen px-5"}>
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>

          <div className="flex flex-col my-4">
            <button className="text-white px-8 py-3 mb-4">Sign In</button>
            <button className="px-8 py-3 ">Sign Up</button>
          </div>
        </ul>
      </div>
      {/* <div className="pt-20"></div> */}
    </>
  );
};

export default Navbar;
