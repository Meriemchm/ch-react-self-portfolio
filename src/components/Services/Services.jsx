import React from "react";
import Service from "./Service";
import { MdOutlineWorkOutline } from "react-icons/md";
import { services } from "../Data/Data";
const Services = () => {
  return (
    <div name="service" className=" h-full w-full bg-four ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col  w-full h-full text-white">
        <div className="mt-8">
          <div className="flex gap-3">
            <div className="bg-white flex justify-center items-center px-2 rounded-lg ">
              <MdOutlineWorkOutline className="text-black" size={40} />
            </div>
            <p className="text-4xl text-white font-bold p-2 inline">Services</p>
          </div>{" "}
          <p className="py-6 text-gray-900/80 text-semibold">
            There is the services i provide.
          </p>
        </div>
        <div data-aos="fade-up"  className="">
          <Service data={services} Title="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
