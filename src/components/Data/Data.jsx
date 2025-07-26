import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaFigma } from "react-icons/fa";
import { BiLogoGit, BiPodcast } from "react-icons/bi";
import { MdPersonalVideo } from "react-icons/md";
import portfolio from "../../assets/portfolio.jpg";
import { CgWebsite } from "react-icons/cg";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";
import { PiAppWindowLight } from "react-icons/pi";
import rameem from "../../assets/rameem.jpg";
import { IoLogoPython } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";

export const techs = [
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
    child: "",
    title: "Windev",
    style: "bg-black",
    type: "others",
  },
];

export const links = [
  {
    id: 1,
    mobile: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: "",
  },
  {
    id: 2,
    mobile: (
      <>
        <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/Meriemchm",
  },
  {
    id: 5,
    mobile: (
      <>
        <TbBrandFiverr size={30} className="bg-third rounded-full p-1 shadow-md" />
      </>
    ),
    href: "https://fr.fiverr.com/meriem_chami?public_mode=true",
  },
  {
    id: 3,
    mobile: (
      <>
        <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:chamimeriem0223@gmail.com",
  },

  // {
  //   id: 4,
  //   mobile: (
  //     <>
  //       <BsFillPersonLinesFill size={30} />
  //     </>
  //   ),
  //   style: "rounded-br-md",
  //   href: "/resume.pdf",
  // },
];

export const Navlink = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 6,
    link: "about",
  },
  {
    id: 2,
    link: "skills",
  },
  {
    id: 3,
    link: "services",
  },
  {
    id: 4,
    link: "projects",
  },
  {
    id: 5,
    link: "contact",
  },
];

export const services = [
  {
    id: 1,
    src: <CgWebsite size={50} className="text-black  self-center" />,
    title: "Portfolio / showcase site",

    style: "bg-white",
    textStyle: "text-black",
  },
  {
    id: 3,
    src: <PiAppWindowLight size={50} className=" text-black self-center" />,
    title: "Web application ",
    style: "bg-third",
    textStyle: "text-black",
  },
  {
    id: 5,
    src: <IoQrCodeOutline size={50} className="text-black self-center" />,
    title: "Degital Menu QR Code",
    style: "bg-white",
    textStyle: "text-black",
  },
  {
    id: 4,
    src: <MdOutlineQueryStats size={50} className="text-black self-center" />,
    title: "Stock Manager ",
    style: "bg-white",
    textStyle: "text-black",
  },
];

export const projects = [
  {
    id: 1,
    src: portfolio,
    title: "portfolio",
    description:
      "Welcome to a personal portfolio website, crafted with the powerful combination of React and Tailwind CSS. This project showcases skills, projects, and experiences in a clean, modern, and responsive design made by me.",
    hcode: "https://github.com/Meriemchm/chm_react_ramzey_chabira_portfolio",
    hdemo: "https://ramzeychabira.netlify.app",
  },
  {
    id: 2,
    src: "Soktech.png",
    title: "Soktech",
    description:
      "This is a unfinished e-commerce project website to publish services or request a service. I was responsible for the design and frontend development with React js and Css , while my teammate, handled the backend development with Laravel and MySQL is used as the database, running on XAMPP in a local environment.",
    hcode: "https://github.com/Meriemchm/Soktech",
    hdemo: "",
  },
  {
    id: 3,
    src: rameem,
    title: "rameem",
    description:
      "Welcome to the Psychologists Website, designed and developed for a client. This project utilizes React and Tailwind CSS for the frontend, providing a modern and responsive user interface. The backend is powered by Express, although I wasn't directly involved in the backend development.",
    hcode: "",
    hdemo: "https://rameemm.netlify.app",
  },

  {
    id: 4,
    src: "digital-menu.png",
    title: "Digital menu",
    description:
      "A responsive digital menu custom-built with React and Tailwind CSS, featuring a QR code for easy access . (you can access the website with the Qr code on the picture)",
    hcode:
      "https://github.com/Meriemchm/chm_QR_Code_Digital_Menu_React_Website_two",
    hdemo: "https://coffee-shopp-menu.netlify.app",
  },
  {
    id: 5,
    src: "1.png",
    title: "Windev",
    description:
      "A cafeteria management software, developed with WinDev, features two main interfaces: one for the admin and one for the cashier. ",
    hdemo: "",
    hcode: "https://github.com/Meriemchm/chm_cafeteria_-stock_manager",
  },
];

export const menuItem = [
  {
    id: 3,
    path: "/rameem",
    title: "rameem",
  },

  {
    id: 2,
    path: "/Soktech",
    title: "Soktech",
  },

  {
    id: 1,
    path: "/portfolio",
    title: "portfolio",
  },

  {
    id: 4,
    path: "/Digital menu",
    title: "Digital menu",
  },

  {
    id: 4,
    path: "/Digital menu",
    title: "Windev",
  },
];

export const formItem = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    pattern: "[A-Za-z]+",
    categorie: "input",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Enter your email",
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
    categorie: "input",
  },
  {
    id: 3,
    name: "message",
    placeholder: "Enter your message",
    categorie: "textarea",
  },
];
