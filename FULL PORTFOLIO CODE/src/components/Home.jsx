import React from "react";
import { Navbar } from "./Navbar";
import hi from "../assets/hi.gif";
import { ReactTyped } from "react-typed";
import boy1 from "../assets/boy1.png";
import "../sass/cta.css";
const Home = () => {
  return (
    <div className="bg-orange-100" id="home">
      <div className="bg-white">
        <Navbar></Navbar>
      </div>
      <div className="home md:px-11 px-2 md:h-[100vh] w-full flex justify-center">
        <div className="md:w-[80%] w-[95%] flex md:justify-between items-center flex-col md:flex-row md:mt-0 mt-36">
          <div className="text-center md:text-left">
            <h1 className="flex items-center md:justify-start justify-center font-bold text-xl">
              Hi,
              <img src={hi} className="w-8 md:w-auto" alt="" />
              <ReactTyped
                cursorChar=" "
                strings={["My NAME IS GODSPOWER"]}
                typeSpeed={100}
              ></ReactTyped>
            </h1>
            <h1 className="font-bold md:text-5xl text-3xl my-7">
              <ReactTyped
                cursorChar=" "
                startDelay={3000}
                strings={["I'm a Web developer"]}
                typeSpeed={100}
              ></ReactTyped>
            </h1>
            <h1 className="text-xl">
              <ReactTyped
                cursorChar=" "
                startDelay={6000}
                strings={["Based in Lagos, Nigeria"]}
                typeSpeed={100}
              ></ReactTyped>
            </h1>
            <button className="cta text-white text-xl py-2 px-3 my-7">
              Let's Start
            </button>
          </div>
          <div className="md:mt-24 mt-10">
            <img
              className="md:h-[700px] h-[400px]"
              src={boy1}
              alt="Godspower Portfolio"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
