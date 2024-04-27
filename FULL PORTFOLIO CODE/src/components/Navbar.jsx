import React, { useState } from "react";
import "../sass/cta.css";
import { AiOutlineMenu } from "react-icons/ai";
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const hide = () => {
    setToggle(false);
  };
  const change = () => {
    {
      toggle ? setToggle(false) : setToggle(true);
    }
    console.log(toggle);
  };
  return (
    <div className="py-4 bg-white w-full fixed">
      <div className="desktop flex w-full justify-center">
        <div className="flex md:w-[80%] w-[95%] justify-between">
          <div className="text-gray-800 logo font-bold cursor-pointer text-2xl">
            <span className="text-white cta">&lt;</span>&nbsp; GODSPOWER{" "}
            <span className="text-white cta">/&gt;</span>
          </div>
          <div className="links md:block hidden">
            <ul className="flex">
              <li className="text-gray-600 mx-4 cursor-pointer font-bold hover:text-orange-500 transition-all">
                <a href="#home">HOME</a>
              </li>
              <li className="text-gray-600 mx-4 cursor-pointer font-bold hover:text-orange-500 transition-all">
                <a href="#about">ABOUT</a>
              </li>
              <li className="text-gray-600 mx-4 cursor-pointer font-bold hover:text-orange-500 transition-all">
                <a href="#skills">SKILLS</a>
              </li>
              <li className="text-gray-600 mx-4 cursor-pointer font-bold hover:text-orange-500 transition-all">
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li className="text-gray-600 mx-4 cursor-pointer font-bold hover:text-orange-500 transition-all">
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="cta text-white text-xl py-2 px-3 contact cursor-pointer font-bold md:block hidden">
            <a href="#contact">CONTACT NOW</a>
          </div>
          <div
            className="contact cursor-pointer font-bold md:hidden"
            onClick={change}
          >
            <AiOutlineMenu size={50}></AiOutlineMenu>
          </div>
        </div>
      </div>
      <div className={toggle ? "block" : "hidden"}>
        <div className="links md:hidden">
          <ul className="block">
            <li className="mx-4 cursor-pointer border-b-2 border-orange-100 py-3 font-bold text-gray-700">
              <a href="#home" onClick={hide}>
                HOME
              </a>
            </li>
            <li className="mx-4 cursor-pointer border-b-2 border-orange-100 py-3 font-bold text-gray-700">
              <a href="#about" onClick={hide}>
                ABOUT
              </a>
            </li>
            <li className="mx-4 cursor-pointer border-b-2 border-orange-100 py-3 font-bold text-gray-700">
              <a href="#skills" onClick={hide}>
                SKILLS
              </a>
            </li>
            <li className="mx-4 cursor-pointer border-b-2 border-orange-100 py-3 font-bold text-gray-700">
              <a href="#portfolio" onClick={hide}>
                PORTFOLIO
              </a>
            </li>
            <li className="mx-4 cursor-pointer border-b-2 border-orange-100 py-3 font-bold text-gray-700">
              <a href="#contact" onClick={hide}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
