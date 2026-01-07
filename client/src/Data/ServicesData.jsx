import { CgWebsite } from "react-icons/cg";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";
import { PiAppWindowLight } from "react-icons/pi";

export const ServicesData = [
  {
    id: 1,
    src: <CgWebsite size={25} className="text-black  self-center" />,
    title: "Portfolio / showcase site",
    description:
      "Create portfolio or showcase websites to highlight your projects and skills.",
    style: "bg-third",
    textStyle: "text-black",
  },
  {
    id: 3,
    src: <PiAppWindowLight size={25} className=" text-black self-center" />,
    title: "Web application ",
    description:
      "Develop interactive and high-performance web applications tailored to your needs.",

  },
  {
    id: 5,
    src: <IoQrCodeOutline size={25} className="text-black self-center" />,
    title: "Degital Menu QR Code",
    description:
      "Design digital menus accessible via QR Code for restaurants and cafes.",

  },
  {
    id: 4,
    src: <MdOutlineQueryStats size={25} className="text-black self-center" />,
    title: "Stock Manager ",
    description:
      "Manage your inventory, products, and sales efficiently with a stock management tool.",
  },
];
