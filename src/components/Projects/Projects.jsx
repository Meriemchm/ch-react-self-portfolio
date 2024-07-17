import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import SideBar from "../SideBar/SideBar";
import Title from "../Title/Title";

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
      </div>
    </div>
  );
};

export default Projects;
