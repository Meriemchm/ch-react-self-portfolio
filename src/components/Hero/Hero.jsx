import React from "react";
import { links } from "../Data/Data";
import Bubble from "../../assets/bubble.svg";
import { Link } from "react-scroll";

const Presentation = () => {
  return (
    <div
      data-aos="fade-up"
      name="home"
      className="flex min-h-screen w-full relative z-0"
    >
      {/* SVG Bubble 1 */}
      <img src={Bubble} alt="Bubble 1" className="absolute top-28 right-5 md:top-20 md:right-36" />

      {/* SVG Bubble 2
      <img
        src={Bubble2}
        alt="Bubble 2"
        className="absolute bottom-0 left-20"
      /> */}

      <div className="absolute inset-0 mx-auto justify-center items-center h-full px-5 sm:px-0 sm:w-1/2">
        <div className="flex flex-col justify-center h-full">
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
          <div className="flex flex-col justify-center relative z-20">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold py-5 font-playfair">
              Welcome !
            </h2>

            <p className="font-playfair text-3xl md:text-6xl xl:text-7xl font-bold text-right">
              Software Developer <span className="text-black">Here</span>
            </p>
          </div>
          <div className="flex gap-4 text-sm md:text-base">
            <Link to="contact" smooth={true} duration={500}>
              <button className="border border-second bg-second text-black px-2 md:px-4 py-2 rounded-md hover:scale-105 duration-200">
                Contact me
              </button>
            </Link>

            {/* Bouton */}
            <Link to="about" smooth={true} duration={500}>
              <button className="border border-black px-2 md:px-4 py-2 rounded-md hover:scale-105 duration-200">
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
