import React from "react";
import Service from "./Service";
import { MdOutlineWorkOutline } from "react-icons/md";
import { services } from "../Data/Data";
import Title from "../Utilities/Title";
const Services = () => {
  return (
    <div name="services" className=" h-full w-full bg-six ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col  w-full h-full text-white">
        <Title
          icon={<MdOutlineWorkOutline className="text-white" size={40} />}
          title="Services"
          description="There is the services i provide."
        />

        <div data-aos="fade-up" className="">
          <Service data={services} Title="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
