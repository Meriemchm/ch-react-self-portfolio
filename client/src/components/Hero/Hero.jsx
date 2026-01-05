import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "../ui/Button";
import { Link } from "react-scroll";

const Presentation = () => {
  return (
    <section
      name="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Demi cercle background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]
        bg-[linear-gradient(135deg,#f6ffd1_0%,#e9f79e_45%,#cfe86a_100%)]
        rounded-t-full z-0"
      />

      {/* LEFT TEXT */}
      <div
        data-aos="fade-right"
        className="hidden lg:flex flex-col gap-6 absolute left-16 top-1/2 -translate-y-1/2 max-w-xs text-left z-10"
      >
        <p className="text-gray-700 text-sm leading-relaxed">
          “Building clean, scalable and modern applications with a strong
          focus on performance and user experience.”
        </p>

        <div>
          <h3 className="text-2xl font-bold">4+ Years</h3>
          <p className="text-sm text-gray-500">Experience</p>
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div
        data-aos="fade-left"
        className="hidden lg:flex flex-col gap-6 absolute right-16 top-1/2 -translate-y-1/2 text-right z-10"
      >
        <div>
          <div className="flex justify-end text-primary text-lg">★★★★★</div>
          <p className="text-sm text-gray-500">Highly Rated</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">10+</h3>
          <p className="text-sm text-gray-500">Projects Delivered</p>
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div
        data-aos="fade-up"
        className="relative z-10 text-center flex flex-col justify-center items-center gap-8 px-6 max-w-3xl"
      >


        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          I’m <span className="text-primary">CHAMI Meriem</span>,
          <br />
          Software Engineer
        </h1>

        {/* Type animation */}
        <p className="text-xl md:text-2xl">
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

        {/* Buttons */}
        <div className="flex gap-4 bg-white/70 px-3 mb-auto rounded-full">
          <Link to="contact" smooth duration={500}>
            <Button className="bg-primary text-white">
              Contact Me
            </Button>
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
