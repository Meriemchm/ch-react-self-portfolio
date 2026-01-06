import React from "react";
import { Links } from "../../Data/Links";
import personal from "../../assets/Images/personal.jpg";
import vector from "../../assets/Icons/vector.svg";
import circle from "../../assets/Icons/circle.svg";
import plus from "../../assets/Icons/plus.svg";
import Button from "../ui/Button";

const Home = () => {
  return (
    <div
      name="about"
      className="flex md:h-screen w-full bg-second py-4 relative"
    >
      <div
        data-aos="fade-up"
        className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center h-full px-8 my-16 gap-5 md:gap-0 md:flex-row md:my-0 z-10"
      >
        <div
          className="flex flex-col md:justify-center h-full gap-2"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-7xl font-extralight  Aboreto ">
            I'm{" "}
            {/* {" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-four"} */}
            <span className=" ">Chami </span> Meriem
          </h2>
          <p className=" py-4 max-w-md md:text-base text-sm">
            Passionate about computer science, I hold a Master’s degree in
            Artificial Intelligence. I enjoy designing efficient and innovative
            solutions. Thanks to my freelance experience, I am autonomous,
            detail-oriented, and fully committed to every project, with a
            constant focus on delivering high-quality work and continuously
            learning.
          </p>
            <a
              href="/CHAMI_Meriem_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
          <Button className="text-white">
              Download My CV
          </Button>
            </a>

          <div className="flex pt-2">
            <ul className="flex flex-row ">
              {Links.map(({ id, mobile, href, download }) => {
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
        <div
          className="relative  hover:scale-105 duration-20"
          data-aos="fade-up"
        >
          {/* Vecteur en dessous */}
          <img
            src={circle}
            alt="icon-circle"
            className="absolute top-5 -left-2 z-10"
          />

          {/* Ton image en dessus */}
          <div className=" rounded-full z-20 md:flex items-center justify-center p-2">
            <img
              src={personal}
              alt="MyProfile"
              className="rounded-full mx-auto h-auto  object-cover"
            />
          </div>
          <img src={plus} alt="icon-plus" className="absolute top-0 right-0" />
        </div>
      </div>
      <img src={vector} alt="vector" className="absolute bottom-0 z-0" />
    </div>
  );
};

export default Home;
