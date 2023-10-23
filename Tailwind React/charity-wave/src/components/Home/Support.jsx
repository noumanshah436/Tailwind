import React from "react";
// import Typed from "react-typed";
import supportImg from "../../assets/support2.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full relative">
      <div className="w-full h-screen bg-gray-900/90">
        <img
          className="w-full h-full object-cover mix-blend-soft-light"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="lg:max-w-[500px] text-white  absolute top-2/3 md:top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-2/3 md:-translate-y-1/2 md:left-2/3 md:-translate-x-1/3 ">
        <div className="flex flex-col">
          <h3 className="leading-tight tracking-wide font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Give a helping hand to those who need it!
          </h3>
          <p className="text-xl pt-8 ">
            When a child gets access to good food, it can change just about
            everything
          </p>
          <button className="px-8 py-3 my-9 w-1/2 rounded-none bg-primary border-primary hover:text-white hover:border-white">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Support;

{
  /* <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={[
                "Be the reason someone smiles",
                "Kindness is our currency",
                "Give with a grateful heart",
                "Small acts, big impacts",
                "Spread love, sow compassion",
                "Every act of kindness matters",
                "Inspire change, ignite hope",
                "Hand in hand, heart to heart",
                "Together, we make a difference",
                "Changing the world, one kindness at a time",
                // "Catalyzing Hope, Transforming Lives Together",
                // "Empowering Change Through Compassion",
                // "Changing the world, one kindness at a time",
              ]}
              typeSpeed={100}
              backSpeed={30}
              loop
            /> */
}
