import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Navlink } from "../Data/Data";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [txtColor, setTxtColor] = useState("text-black");
  const [logoColor, setLogoColor] = useState("bg-gradient-to-r");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;

    if (scrollY > threshold) {
      setBgColor(" bg-slate-100 ");
/*       setTxtColor("text-white")
      setLogoColor("text-white") */
    } else {
      setBgColor("bg-transparent");
/*       setTxtColor("text-black")
      setLogoColor("bg-gradient-to-r") */
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onScroll={handleScroll}
      className={`flex justify-between items-center w-full h-20 text-white px-4 md:px-20 ${bgColor} from-purple-500 to-purple-300  fixed z-10`}
    >
      <div>
        <h1 className={`font-extrabold text-transparent text-4xl ml-2 md:text-5xl bg-clip-text  from-yellow-500 to-four ${logoColor} `}>
          CM
        </h1>
      </div>

      <ul className="hidden md:flex ">
        {Navlink.map(({ id, link }) => {
          return (
            <li
              key={id}
              className={`px-8 cursor-pointer font-light text-lg  hover:scale-105 duration-200 capitalize ${txtColor} `}
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {show ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {show && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-purple-800 via-purple-300 to-orange-300 text-white/80">
          {Navlink.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 py-4 cursor-pointer text-4xl text-white/80 hover:scale-105 duration-200 capitalize"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setShow(!show)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <button className="hidden bg-gradient-to-r from-four to-yellow-500 px-6 py-3 rounded-md  lg:block text-orange-900 text-bold duration-200 hover:scale-105 ">
        {" "}
        <Link to="contact" smooth duration={500}>
          Contact
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
