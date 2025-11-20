import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaFigma } from "react-icons/fa";
import { BiLogoGit } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";
import { PiAppWindowLight } from "react-icons/pi";
import rameem from "../assets/Images/rameem.jpg";
import rameemDash from "../assets/Images/rameem-dash.png";
import rameemHistoryDash from "../assets/Images/rameem-history-dash.png";
//import portfolio from "../assets/Images/portfolio.jpg";
//import blackBg from "../assets/Images/back_bg.jpg";
// import Soktech from "../assets/Images/Soktech.png";
// import windev from "../assets/Images/1.png";
// import DigitalMenu from "../assets/Images/menu_1.png";
import bookTracker from "../assets/Images/book-tracker.png";
import AdminDashLight from "../assets/Images/admin-dash-light.png";
import AdminDash from "../assets/Images/admin-dash.png";
import HomeStore from "../assets/Images/home-store-page.png";
import DentalClinic from "../assets/Images/dental-clinic.png";
import BloomBox from "../assets/Images/bloombox.png";
import Flexflow from "../assets/Images/flexflow.png";
import Flexflow_2 from "../assets/Images/flexflow_2.png";
import { IoLogoPython } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";

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
        <TbBrandFiverr
          size={30}
          className="bg-third rounded-full p-1 shadow-sm"
        />
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
    id: 6,
    src: [DentalClinic],
    title: "dental clinic",
    description:
      "Welcome to the Dental Clinic website, a modern and responsive platform designed to showcase dental services, connect with patients easily through an integrated contact system using EmailJS, and manage appointments efficiently via the Google Calendar API.",
    techs: ["Next js", "Tailwind css", "Email js", "Google API"],
    hcode: "https://github.com/Meriemchm/chm_dental_clinic_website",
    hdemo: "https://chm-dental-clinic-website.vercel.app",
  },
  {
    id: 0,
    src: [AdminDash, AdminDashLight, HomeStore],
    title: "e-commerce",
    description:
      "I developed a full-stack e-commerce platform with Next.js, featuring two sides: an Admin Dashboard for managing products, inventory, and orders, and a Storefront for customers to browse and purchase items. The database layer runs on MySQL containerized with Docker, making the development environment portable, consistent, and easy to deploy.",
    techs: ["Next.js", "MySQL", "Prisma ORM", "Docker"],
    hcode: "https://github.com/ton-repo",
    hdemo: "",
    subRepos: [
      {
        label: "Dashboard",
        link: "https://github.com/Meriemchm/chm_admin_e-commerce_website",
      },
      {
        label: "Store",
        link: "https://github.com/Meriemchm/chm_e-commerce_store_website",
      },
    ],
    subDemo: [
      { label: "Dashboard", link: "https://github.com/ton-repo-dashboard" },
      { label: "Store", link: "https://github.com/ton-repo-store" },
    ],
  },
  // {
  //   id: 1,
  //   src: [portfolio],
  //   title: "portfolio",
  //   description:
  //     "Welcome to a personal portfolio website, crafted with a clean, modern, and responsive design made by me.",
  //   techs: ["React", "Tailwind CSS"],
  //   hcode: "https://github.com/Meriemchm/chm_react_ramzey_chabira_portfolio",
  //   hdemo: "https://ramzeychabira.netlify.app",
  // },
  {
    id: 2,
    src: [BloomBox],
    title: "bloombox",
    description:
      "A next-gen flower delivery service. Bloombox offers a subscription-based model for fresh, hand-picked flowers delivered to your doorstep weekly. Customize your box, skip weeks, or cancel anytime with ease through our user-friendly platform. Designed by <span class='font-bold'>REZK-KALLAH Amina</span> and developed by <span class='font-bold'>me</span>.",
    techs: ["Next.js", "Tailwind CSS"],
    hcode: "https://github.com/Meriemchm/chm_nextjs_bloombox_website",
    hdemo: "https://bloombox-website.vercel.app",
  },
  //   {
  //   id: 2,
  //   src: [Soktech],
  //   title: "soktech",
  //   description:
  //     "This is an unfinished e-commerce project website to publish services or request a service. I was responsible for the design and frontend development, while my teammate handled the backend development. The database runs on XAMPP in a local environment.",
  //   techs: ["React", "CSS", "Laravel", "MySQL"],
  //   hcode: "https://github.com/Meriemchm/Soktech",
  //   hdemo: "",
  // },
  {
    id: 1,
    src: [rameem, rameemDash, rameemHistoryDash],
    title: "rameem",
    description:
      "Welcome to the Psychologists Website, a client project where I contributed mainly to the frontend interface and user interaction, while also setting up the API integration. The platform features a dual-dashboard system: one for patients to book appointments and another for doctors to manage them.",
    techs: ["React", "Tailwind CSS", "Express"],
    hcode: "https://github.com/Meriemchm/chm_psychology_react_website",
    hdemo: "https://rameemm.netlify.app",
  },
  {
    id: 7,
    src: [Flexflow, Flexflow_2],
    title: "flexflow",
    description:
      "A calming and modern yoga website designed to promote balance, mindfulness, and well-being. The layout is intuitive, the visuals are seren, and inner harmony.",
    techs: ["Next.js", "Tailwind CSS"],
    hcode: "https://github.com/Meriemchm/chm_yoga_website",
    hdemo: "https://flexxflow.vercel.app",
  },
  {
    id: 3,
    src: [bookTracker],
    title: "book tracker API",
    description:
      "A flexible and reusable backend for a Book Tracking and Note Sharing App, where users can create accounts, track their books, write notes, and choose whether to make their notes private or public to share with others.",
    techs: ["Express.js", "Prisma ORM ", "PostgreSQL", "Docker"],
    hcode: "https://github.com/ton-repo",
    hdemo: "",
    subRepos: [
      {
        label: "Backend API",
        link: "https://github.com/Meriemchm/chm_book_tracker_backend",
      },
      // {
      //   label: "Store",
      //   link: "https://github.com/Meriemchm/chm_e-commerce_store_website",
      // },
    ],
    subDemo: [
      {
        label: "Backend API",
        link: "https://github.com/Meriemchm/chm_book_tracker_backend",
      },
      // { label: "Store", link: "https://github.com/ton-repo-store" },
    ],
  },
  // {
  //   id: 4,
  //   src: [DigitalMenu],
  //   title: "digital menu",
  //   description:
  //     "A responsive digital menu custom-built with a QR code for easy access. (you can access the website with the QR code on the picture)",
  //   techs: ["React", "Tailwind CSS"],
  //   hcode: "https://github.com/Meriemchm/chm_QR_Code_Menu_React_Website",
  //   hdemo: "https://havana-menu.netlify.app",
  // },
  // {
  //   id: 5,
  //   src: [windev],
  //   title: "windev",
  //   description:
  //     "A cafeteria management software, featuring two main interfaces: one for the admin and one for the cashier.",
  //   techs: ["WinDev"],
  //   hdemo: "",
  //   hcode: "https://github.com/Meriemchm/chm_cafeteria_-stock_manager",
  // },
];

export const menuItem = [
  { id: 6, title: "dental clinic" },
  {
    id: 0,
    title: "e-commerce",
  },
  { id: 7, title: "flexflow" },
  {
    id: 3,
    title: "book tracker API",
  },
  {
    id: 1,
    title: "rameem",
  },

  {
    id: 2,
    title: "bloombox",
  },

  // {
  //   id: 3,
  //   title: "portfolio",
  // },

  // {
  //   id: 4,
  //   title: "digital menu",
  // },

  // {
  //   id: 5,
  //   title: "windev",
  // },
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
