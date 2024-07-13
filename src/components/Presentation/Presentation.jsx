import React from "react";
import { links } from "../Data/Data";

const Presentation = () => {
  return (
    <div
      data-aos="fade-up"
      name="home"
      className="flex min-h-screen w-full relative "
    >
      <div className="absolute inset-0  mx-auto justify-center items-center h-full px-5 sm:px-0 sm:w-1/2">
        <div className="flex flex-col justify-center h-full gap-8  ">
          <div className="flex flex-col justify-center ">
            <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold py-5 ">
              Hey there, I am a
            </h2>
            <p className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 text-4xl md:text-6xl xl:text-8xl font-bold text-right">
              Software Developer
            </p>
          </div>
          <div className="flex  ">
            <ul className="flex flex-row ">
              {links.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-105 duration-200">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full text-black "
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
