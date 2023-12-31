import React from "react";
import { GiSkills } from "react-icons/gi";
import Skill from "./Skill";
import { techs } from "./Data";

const Skills = () => {
  const frontTechs = techs.filter((tech) => tech.type === "frontend");
  const designTechs = techs.filter((tech) => tech.type === "design");
  const othersTechs = techs.filter((tech) => tech.type === "others");

  return (
    <div name="skills" className="bg-white w-full ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col  w-full h-full text-white">
        <div className="mt-8">
          <div className="flex gap-3">
            <div className="bg-gradient-to-b from-purple-500 to-purple-300 flex justify-center items-center px-2 rounded-lg ">
              <GiSkills size={40} />
            </div>
            <p className="text-4xl text-primary font-bold p-2 inline">Skills</p>
          </div>{" "}
          <p className="py-6 text-gray-900/80 text-semibold">
          There is the tools i work with.
          </p>
        </div>
        {/* others */}
        <Skill Title="Front-end" data={frontTechs} />
        {/* design */}
        <Skill Title="Design" data={designTechs} />
        {/* others */}
        <Skill Title="Others" data={othersTechs} />
      </div>
    </div>
  );
};

export default Skills;
