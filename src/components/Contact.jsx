import React from "react";
import { MdConnectWithoutContact } from "react-icons/md";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full bg-white ">
      
        <div className="flex flex-col p-4 max-w-screen-lg mx-auto h-full  ">
          <div className="pb-8">
            <div className="flex gap-3">
              <div className="bg-gradient-to-b from-purple-500 to-purple-300 flex justify-center items-center px-2 rounded-lg ">
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
          <div className=" p-5  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-purple-500 rounded-lg bg-gray-200/100  ">
          <div className="p-5 flex justify-center items-center backdrop-blur-lg bg-white/30 rounded-lg">
            <form
              action="https://getform.io/f/c32b25bc-8fbe-4a27-b89c-9bea5bcf16be"
              method="POST"
              className="flex flex-col w-full md:w-1/2 justify-center mt-5"
            >
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 border-white rounded-md text-white placeholder-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                autoComplete="off"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 border-white rounded-md text-white focus:outline-none placeholder-white"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                autoComplete="off"
                className="p-2 bg-transparent border-2 border-white rounded-md text-white placeholder-white focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-r from-purple-400 to-purple-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Contact me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
