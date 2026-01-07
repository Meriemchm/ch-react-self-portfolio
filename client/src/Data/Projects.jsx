import rameem from "../assets/Images/rameem.jpg";
import rameemDash from "../assets/Images/rameem-dash.png";
import rameemHistoryDash from "../assets/Images/rameem-history-dash.png";
import bookTracker from "../assets/Images/book-tracker.png";
import AdminDashLight from "../assets/Images/admin-dash-light.png";
import AdminDash from "../assets/Images/admin-dash.png";
import HomeStore from "../assets/Images/home-store-page.png";
import DentalClinic from "../assets/Images/dental_clinic_1.png";
import DentalClinic_2 from "../assets/Images/dental_clinic_2.png";
import portfolio_1 from "../assets/Images/ad-1.png";
import portfolio_2 from "../assets/Images/ad-2.png";
import Flexflow from "../assets/Images/flexflow.png";
import Flexflow_2 from "../assets/Images/flexflow_2.png";
import AiStudio from "../assets/Images/ai-studio.webp";
import AiStudio_2 from "../assets/Images/ai-studio-2.webp";

export const Projects = [
  {
    id: 1,
    src: [DentalClinic, DentalClinic_2],
    title: "dental clinic",
    description:
      "Welcome to the Dental Clinic website, a modern and responsive platform designed to showcase dental services, connect with patients easily through an integrated contact system using EmailJS, and manage appointments efficiently via the Google Calendar API.",
    techs: ["Next js", "Tailwind css", "Email js", "Google API"],
    hcode: "https://github.com/Meriemchm/chm_dental_clinic_website",
    hdemo: "https://chm-dental-clinic-website.vercel.app",
  },
  {
    id: 2,
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
  {
    id: 3,
    src: [rameem, rameemDash, rameemHistoryDash],
    title: "rameem",
    description:
      "Welcome to the Psychologists Website, a client project where I contributed mainly to the frontend interface and user interaction, while also setting up the API integration. The platform features a dual-dashboard system: one for patients to book appointments and another for doctors to manage them.",
    techs: ["React", "Tailwind CSS", "Express"],
    hcode: "https://github.com/Meriemchm/chm_psychology_react_website",
    hdemo: "https://rameemm.netlify.app",
  },
  {
    id: 4,
    src: [Flexflow, Flexflow_2],
    title: "flexflow",
    description:
      "A calming and modern yoga website designed to promote balance, mindfulness, and well-being. The layout is intuitive, the visuals are seren, and inner harmony.",
    techs: ["Next.js", "Tailwind CSS"],
    hcode: "https://github.com/Meriemchm/chm_yoga_website",
    hdemo: "https://flexxflow.vercel.app",
  },
  {
    id: 5,
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
    ],
    subDemo: [
      {
        label: "Backend API",
        link: "https://github.com/Meriemchm/chm_book_tracker_backend",
      },
    ],
  },
  {
    id: 6,
    src: [portfolio_1, portfolio_2],
    title: "A. D | Portfolio",
    description:
      "An interactive portfolio for a photographer, featuring smooth animations, custom scrolling, and modern navigation for an immersive user experience.",
    techs: ["Next.js", "Tailwind CSS", "Gsap", "Frame motion", "lenis scroll"],
    hcode: "https://github.com/Meriemchm/chm_portfolio_showcase_photographer",
    hdemo: "https://adportfolio-two.vercel.app",
  },
    {
    id: 7,
    src: [AiStudio, AiStudio_2],
    title: "AI. Studio",
    description:
      "I design and build immersive digital experiences where technology, creativity, and interaction converge. Through modern web technologies and 3D-driven interfaces.",
    techs: ["Next.js", "Tailwind CSS", "Gsap", "Frame motion", "lenis scroll"],
    hcode: "https://github.com/Meriemchm/chm_3d_interactive_next.js_website",
    hdemo: "https://chm-3d-interactive-next-js-website.vercel.app",
  },
];
