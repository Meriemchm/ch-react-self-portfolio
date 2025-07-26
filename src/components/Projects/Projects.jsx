import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import SideBar from "../Utilities/SideBar";
import Title from "../Utilities/Title";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div name="projects" className="bg-white w-full min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col w-full h-full ">
        <Title
          icon={<GoProjectSymlink size={40} className="text-white" />}
          title="Projects"
          description="There is my work."
        />
        {/*projects*/}
        <div className="flex flex-col md:flex-row">
          <SideBar />
        </div>

        <div className=" hover:scale-105 duration-200">
          <a
            href="https://github.com/Meriemchm"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2  py-6"
          >
            <h2 className="self-center font-bold underline md:text-xl text-lg ">
              For more projects visit my github{" "}
            </h2>
            <span>
              <FaGithub size={30} className="" />
            </span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
