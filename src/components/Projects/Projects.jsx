import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import SideBar from "../SideBar/SideBar";

const Projects = () => {
  return (
    <div name="project" className="bg-white w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col w-full h-full md:border-0 border-b-2 border-gray-200">
        <div className="mt-8">
          <div className="flex gap-3">
            <div className="bg-gradient-to-b from-purple-500 to-purple-300 flex justify-center items-center px-2 rounded-lg ">
              <GoProjectSymlink size={40} className="text-white" />
            </div>
            <p className="text-4xl text-primary font-bold p-2 inline">
              Projects
            </p>
          </div>{" "}
          <p className="py-6 text-gray-900/80 text-semibold">
          There is my work.
          </p>
        </div>
        {/*projects*/}

        <div className="flex flex-col md:flex-row">
          <SideBar />

        </div>
      </div>
    </div>
  );
};

export default Projects;
