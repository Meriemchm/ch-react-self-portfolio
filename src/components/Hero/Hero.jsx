import React from "react";
import { links } from "../Data/Data";
import Bubble from "../../assets/Icons/bubble.svg";
import { TypeAnimation } from "react-type-animation";

import { Link } from "react-scroll";

const Presentation = () => {
  return (
    <div
      data-aos="fade-up"
      name="home"
      className="flex min-h-screen w-full relative z-0"
    >
      {/* SVG Bubble */}
      <img
        src={Bubble}
        alt="Bubble 1"
        className="absolute top-28 right-5 md:top-20 md:right-36"
      />

      <div className="absolute inset-0 mx-auto justify-center items-center h-full w-full px-5 sm:px-0 sm:w-1/2">
        <div className="flex flex-col justify-center h-full w-full">
          <div className="flex">
            <ul className="flex flex-row">
              {links.map(({ id, mobile, href, download }) => (
                <li key={id} className="mr-5 hover:scale-105 duration-200">
                  <a
                    href={href ? href : "/"}
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center w-full text-black"
                  >
                    {mobile}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start relative z-20 pb-10 pt-4">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold pb-5 font-playfair">
              Welcome !
            </h2>

            <p className="font-playfair text-3xl md:text-4xl xl:text-5xl font-bold text-right">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Master's Degree in Artificial Intelligence",
                  3000,
                  "Web Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                cursor={true}
                wrapper="span"
                speed={70}
                repeat={Infinity}
                className="text-black"
              />
              
            </p>
            <p className="font-playfair text-black text-2xl md:text-4xl text-right">Here</p>
          </div>
          <div className="flex gap-4 text-sm md:text-base">
            <Link to="contact" smooth={true} duration={500}>
              <button className="border border-second bg-second text-black px-2 text-sm md:text-base md:px-4 py-2 rounded-md hover:scale-105 duration-200">
                Contact me
              </button>
            </Link>

            {/* Bouton */}
            <Link to="about" smooth={true} duration={500}>
              <button className="border border-black px-2 md:px-4 py-2 text-sm md:text-base rounded-md hover:scale-105 duration-200">
                About me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
