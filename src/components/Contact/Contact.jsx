import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { formItem, links } from "../Data/Data";
import Title from "../Utilities/Title";
import flower from "../../assets/Icons/flower.svg";

const Contact = () => {
  const inputItem = formItem.filter((item) => item.categorie === "input");
  const areaItem = formItem.filter((item) => item.categorie === "textarea");
  return (
    <div name="contact" className="w-full h-[125vh] lg:h-screen bg-six py-8">
      <div className="flex flex-col md:flex-row p-4 max-w-screen-lg mx-auto h-full">
        {/* first */}
        <div className="flex flex-col">
          <Title
            icon={<MdConnectWithoutContact size={40} className="text-white" />}
            title="Contact"
            description="You can Contact me here."
          />
          <div className="flex">
            <ul className="flex flex-row ">
              {links.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-105 duration-200">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full "
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* second */}
        <div
          data-aos="fade-up"
          className="flex md:flex-1 mt-12 md:mt-0 flex-col justify-center items-center gap-4 relative"
        >
          {/* Fleur en arrière-plan */}
          <img
            src={flower}
            alt="flower-icon"
            className="absolute bottom-0 right-0 z-0 opacity-80 pointer-events-none"
          />

          {/* Formulaire au-dessus */}
          <form
            action="https://getform.io/f/c32b25bc-8fbe-4a27-b89c-9bea5bcf16be"
            method="POST"
            className="relative z-10 flex flex-col w-full md:w-1/2 gap-4 justify-end"
          >
            {inputItem.map((item, id) => (
              <input
                key={id}
                type={item.type}
                name={item.name}
                autoComplete="off"
                placeholder={item.placeholder}
                className="p-3 bg-transparent border border-gray-400 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none"
              />
            ))}

            {areaItem.map((item, id) => (
              <textarea
                key={id}
                name={item.name}
                placeholder={item.placeholder}
                rows="8"
                autoComplete="off"
                className="resize-none p-3 bg-transparent border border-gray-400 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none"
              ></textarea>
            ))}

            <button className="bg-black text-white text-sm md:text-base px-6 py-3 my-4 self-center md:self-start rounded-md hover:scale-110 duration-300">
              Contact me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
