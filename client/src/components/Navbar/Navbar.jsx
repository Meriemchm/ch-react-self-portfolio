import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Navlink } from "../../Data/Data";
import bars from "../../assets/Icons/bars.svg";
import times from "../../assets/Icons/times.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [txtColor, setTxtColor] = useState("text-black");
  const [logoColor, setLogoColor] = useState("bg-gradient-to-r");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;

    if (scrollY > threshold) {
      setBgColor(" bg-six ");
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
      className={`flex justify-between items-center w-full h-20 text-white px-4 md:px-20 my-2 rounded-full ${bgColor} fixed z-50`}
    >
      <Link to="home" smooth duration={500}>
        <img src="icon.png" alt="icon" className="h-16 w-22 cursor-pointer" />
      </Link>

      <ul className="hidden md:flex ">
        {Navlink.map(({ id, link }) => {
          return (
            link !== "contact" && (
              <li
                key={id}
                className={`px-8 cursor-pointer font-light text-lg hover:scale-105 duration-200 capitalize ${txtColor}`}
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            )
          );
        })}
      </ul>
      <button className="hidden md:flex bg-black  px-2 md:px-4 py-2 rounded-md hover:scale-105 duration-200">
        <Link to="contact" smooth duration={500}>
          Contact
        </Link>
      </button>

      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {show ? (
          <img src={times} alt="Close Menu" />
        ) : (
          <img src={bars} alt="Open Menu" />
        )}
      </div>
      {show && (
        <ul className="flex flex-col justify-center items-center absolute -top-2 left-0 w-full min-h-screen bg-second text-black">
          {Navlink.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 py-4 cursor-pointer text-lg  hover:scale-105 duration-200 capitalize"
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
    </div>
  );
};

export default Navbar;
