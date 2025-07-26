import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { formItem } from "../Data/Data";
import Title from "../Utilities/Title";

const Contact = () => {
  const inputItem = formItem.filter((item) => item.categorie === "input");
  const areaItem = formItem.filter((item) => item.categorie === "textarea");
  return (
    <div name="contact" className="w-full h-[125vh] bg-six ">
      <div className="flex flex-col p-4 max-w-screen-lg mx-auto h-full  ">
        <Title
          icon={<MdConnectWithoutContact size={40} className="text-white" />}
          title="Contact"
          description="You can Contact me here."
        />

        <div
          data-aos="fade-up"
          className=" flex justify-center items-center  rounded-lg"
        >
          <form
            action="https://getform.io/f/c32b25bc-8fbe-4a27-b89c-9bea5bcf16be"
            method="POST"
            className="flex flex-col w-full md:w-1/2 justify-center mt-12 gap-4"
          >
            {inputItem.map((item, id) => {
              return (
                <input
                  key={id}
                  type={item.type}
                  name={item.name}
                  autoComplete="off"
                  placeholder={item.placeholder}
                  className="p-2 bg-transparent border border-black rounded-md text-gray placeholder-gray focus:outline-none"
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
                  className="resize-none p-2 bg-transparent border-2 border-gray-400 rounded-md text-gray placeholder-gray focus:outline-none"
                ></textarea>
              );
            })}

            <button className=" bg-black text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Contact me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
