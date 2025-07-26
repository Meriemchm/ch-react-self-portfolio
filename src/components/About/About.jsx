import React from "react";
import { links } from "../Data/Data";
import personal from "../../assets/personal.jpg";
const Home = () => {
  return (
    <div
      name="about"
      className="flex md:h-screen w-full bg-second py-4 "
    >
      <div
        data-aos="fade-up"
        className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center h-full px-8 my-16 gap-5 md:gap-0 md:flex-row md:my-0"
      >
        <div className="flex flex-col md:justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold  font-playfair">
           I'm a {/* {" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-four"} */}
            <span className="">
              Software{" "}
            </span>{" "}
            Developer
          </h2>
          <p className=" py-4 max-w-md md:text-base text-sm">
            Chami Meriem here, As a frontend developer, I excel in using
            technologies like{" "}
            <span className="font-bold text-four">React </span>and{" "}
            <span className="font-bold text-four">Tailwind CSS</span> to build
            responsive and dynamic websites. I use{" "}
            <span className="font-bold text-four">Figma</span> a design tool who
            allow me to conceptualize and prototype user interfaces with
            precision . Finaly, For software development, I use WinDev primarily
            for its robust features and development environment tailored for
            rapid application development.{" "}
          </p>
          <div className="flex">
            <ul className="flex flex-row ">
              {links.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-105 duration-200">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full "
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-full  md:flex items-center justify-center p-2 hover:scale-105 duration-200">
          <img
            src={personal}
            alt="MyProfile"
            className="rounded-full mx-auto md:w-[28rem] h-auto md:h-[22rem] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
