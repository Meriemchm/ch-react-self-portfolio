import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaFigma } from "react-icons/fa";
import { BiLogoGit } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoPython } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import { SiMongodb, SiDocker } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export const Techs = [
  {
    id: 1,
    child: <FaReact color="black" size={45} />,
    title: "React",
    style: " bg-second",
    type: "framework",
  },
  {
    id: 2,
    child: <SiTailwindcss className="text-white" size={45} />,
    title: "tailwindcss",
    style: "bg-black",
    type: "framework",
  },
  {
    id: 5,
    child: <IoLogoPython className="text-white" size={45} />,
    title: "Python",
    style: "bg-black",
    type: "programming languages",
  },

  {
    id: 7,
    child: <IoLogoJavascript className="text-white" size={45} />,
    title: "Java script",
    style: "bg-black",
    type: "programming languages",
  },

  {
    id: 3,
    child: <FaFigma color="white" size={45} />,
    title: "Figma",
    style: "bg-black",
    type: "others",
  },
  {
    id: 4,
    child: <BiLogoGit className="text-white" size={45} />,
    title: "Git & Github",
    style: "bg-black",
    type: "others",
  },
  {
    id: 6,
    child: <p className="text-white font-bold md:text-3xl text-2xl">W</p>,
    title: "Windev",
    style: "bg-black",
    type: "others",
  },
  {
    id: 8,
    child: <TbBrandNextjs className="text-white" size={45} />,
    title: "Next js",
    style: "bg-black",
    type: "framework",
  },
  {
    id: 9,
    child: <SiMysql className="text-white" size={45} />,
    title: "MySQL",
    style: "bg-black",
    type: "database",
  },
  {
    id: 10,
    child: <SiMongodb className="text-white" size={45} />,
    title: "MongoDB",
    style: "bg-black",
    type: "database",
  },
  {
    id: 11,
    child: <SiExpress className="text-white" size={45} />,
    title: "Express",
    style: "bg-black",
    type: "backend",
  },
  {
    id: 12,
    child: <SiDocker className="text-white" size={45} />,
    title: "Docker",
    style: "bg-black",
    type: "others",
  },
];
