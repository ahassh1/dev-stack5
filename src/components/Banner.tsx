import React from "react";

import bannerImg from "../assets/bannerImg.png";

const Banner = () => {
  return (

      <div className="container mx-auto flex flex-col items-center justify-between  px-3 py-13 md:flex-row md:px-0 gap-10">
    
        <div className="md:w-1/2">

          <h1 className="text-4xl font-bold leading-tight text-[#111827] md:text-5xl">
            Build Your Ideeal
            <br />

            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits 
            your next project. So this project is development stack lerner project, hopefully all lerner will benefit to that
          </p>

     
          <div className="mt-6 flex items-center gap-3">

            <button className="cursor-pointer rounded-md bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] px-4 py-2 text-xs font-medium text-white hover:bg-[#FF9722]">
              Explore Technologies
            </button>

            <button className="cursor-pointer rounded-md border border-gray-200 bg-white px-7 py-2 text-xs text-gray-600 hover:bg-gray-50">
              Learn More
            </button>

          </div>

        </div>

  
        <div className="flex justify-center md:w-1/2">
          <img
            src={bannerImg}
            alt="Development Stack"
            className="w-70 md:w-97"
          />
        </div>

      </div>

  );
};

export default Banner;