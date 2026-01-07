import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandFiverr } from "react-icons/tb";

export const Links = [
  {
    id: 1,
    mobile: (
      <>
        <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/meriem-chami-361213283/",
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
];