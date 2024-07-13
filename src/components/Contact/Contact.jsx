import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { formItem } from "../Data/Data";

const Contact = () => {
  const inputItem = formItem.filter((item) => item.categorie === "input");
  const areaItem = formItem.filter((item) => item.categorie === "textarea");
  return (
    <div name="contact" className="w-full min-h-screen bg-slate-100 ">
      <div className="flex flex-col p-4 max-w-screen-lg mx-auto h-full  ">
        <div className="pb-8">
          <div className="flex gap-3">
            <div className="bg-primary flex justify-center items-center px-2 rounded-lg ">
              <MdConnectWithoutContact size={40} className="text-white" />
            </div>
            <p className="text-4xl text-primary font-bold p-2 inline">
              Contact
            </p>
          </div>

          <p className="py-6 text-gary-500/80 text-semibold">
            You can Contact me here.
          </p>
        </div>
       
          <div data-aos="fade-up"  className=" flex justify-center items-center  rounded-lg">
            <form
              action="https://getform.io/f/c32b25bc-8fbe-4a27-b89c-9bea5bcf16be"
              method="POST"
              className="flex flex-col w-full md:w-1/2 justify-center mt-5 gap-4"
            >
              {inputItem.map((item, id) => {
                return (
                  <input
                    key={id}
                    type={item.type}
                    name={item.name}
                    autoComplete="off"
                    placeholder={item.placeholder}
                    className="p-2 bg-transparent border-b-2 border-b-gray  text-gray placeholder-gray focus:outline-none"
                  />
                );
              })}
              {areaItem.map((item, id) => {
                return (
                  <textarea
                    key={id}
                    name={item.name}
                    placeholder={item.placeholder}
                    rows="10"
                    autoComplete="off"
                    className="resize-none p-2 bg-transparent border-2 border-gray rounded-md text-gray placeholder-gray focus:outline-none"
                  ></textarea>
                );
              })}

              <button className="text-white bg-primary px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Contact me
              </button>
            </form>
     
        </div>
      </div>
    </div>
  );
};

export default Contact;
