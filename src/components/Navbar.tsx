import React from "react";
import navImg from "../assets/Background+Shadow.png";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-16 border-b-2 border-gray-100 bg-white">
      <div className="mx-auto container flex h-full  items-center justify-between w-full px-3 md:px-0">
        <div className="md:hidden block text-gray-600">
          <RxHamburgerMenu />
        </div>

        <div className="flex items-center gap-2">
          <div className="h-8 w-8">
            <img src={navImg} alt="" />
          </div>
          <h2 className="text-sm font-semibold text-gray-800">
            Dev
            <span className="text-sm font-semibold text-[#D91B7E]">Stack</span>
          </h2>
        </div>

        <div className="md:flex items-center gap-7 hidden">
          <a href="#" className="text-[11px] text-[#D91B7E]">
            Home
          </a>

          <a
            href="#"
            className="text-[11px] text-gray-500 hover:text-[#D91B7E]"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-[11px] text-gray-500 hover:text-[#D91B7E]"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-[11px] text-gray-500 hover:text-[#D91B7E]"
          >
            About
          </a>

          <a
            href="#"
            className="text-[11px] text-gray-500 hover:text-[#D91B7E]"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[11px] text-gray-600 border-2 hover:text-black border-gray-100 px-4 py-2 rounded-full hover:bg-gray-50 cursor-pointer">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 cursor-pointer px-4 py-2 text-[10px] font-medium text-white hover:text-gray-700 hover:bg-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
