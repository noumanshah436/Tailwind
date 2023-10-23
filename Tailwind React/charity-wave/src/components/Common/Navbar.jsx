import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="w-screen h-[80px] text-white bg-primary fixed drop-shadow-lg top-0 z-50">
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
            </ul>
          </div>

          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-primary w-screen px-5"}>
          <li className="border-b-2 border-zinc-300 w-full"><Link to="/">Home</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link to="/about">About</Link></li>
          <li className="border-b-2 border-zinc-300 w-full"><Link to="/blogs">Blogs</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
