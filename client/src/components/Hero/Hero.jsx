import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "../ui/Button";
import { Link } from "react-scroll";

const Presentation = () => {
  return (
    <section
      name="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden "
    >
      {/* Demi cercle background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-third rounded-t-full z-0" />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col justify-center items-center gap-8 px-6 max-w-3xl">
        {/* Hello badge */}
        <span className="inline-block w-fit mb-4 px-4 py-1 text-sm rounded-full bg-black text-white">
          Hello !
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          I’m <span className="text-primary">CHAMI Meriem</span>,
          <br />
          Software Engineer
        </h1>

        {/* Type animation */}
        <p className="text-xl md:text-2xl  mb-4">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Master’s Degree in Artificial Intelligence",
              3000,
              "Frontend Developer",
              2000,
            ]}
            speed={60}
            repeat={Infinity}
          />
        </p>
        {/* /*  
      
        <p className="text-gray-600 mb-8 text-lg">
          Building modern software with performance & elegance.
        </p> */}

        {/* Buttons */}
        <div className="flex justify-center mb-auto items-end gap-4">
          <Link to="contact" smooth duration={500}>
            <Button className="bg-primary text-white">Contact Me</Button>
          </Link>

          <Link to="about" smooth duration={500}>
            <Button variant="outline" className="border-black text-black">
              About Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
