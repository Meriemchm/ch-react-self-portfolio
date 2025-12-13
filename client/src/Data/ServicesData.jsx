import { CgWebsite } from "react-icons/cg";
import { IoQrCodeOutline } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";
import { PiAppWindowLight } from "react-icons/pi";

export const ServicesData = [
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
