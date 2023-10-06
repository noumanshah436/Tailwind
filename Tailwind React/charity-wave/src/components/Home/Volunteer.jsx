import React from "react";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <div name="volunteer" className="w-full py-32 bg-[#60bc0f]">
      <div className="max-w-[1240px] mx-auto flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-5xl text-white font-bold">Become a volunteer</h2>
          <p className="text-3xl py-6 text-white">
            So seed seed green that winged cattle in. Gathering thing made fly
            you're divided deep leave on the medicene moved us land years
            living..
          </p>
          <button className="mt-10 px-8 py-3 font-medium">
            <Link to="/join">Join with us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
