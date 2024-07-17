import React from "react";
import { GiSkills } from "react-icons/gi";
import Skill from "./Skill";
import { techs } from "../Data/Data";
import Title from "../Title/Title";

const Skills = () => {
  const frontTechs = techs.filter(
    (tech) => tech.type === "programming languages"
  );
  const designTechs = techs.filter((tech) => tech.type === "framework");
  const othersTechs = techs.filter((tech) => tech.type === "others");

  return (
    <div name="skills" className="bg-white w-full  ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col  w-full min-h-screen text-white">
        <Title
          icon={<GiSkills size={40} />}
          title="Skills"
          description="There is the tools i work with."
        />
        {/* others */}
        <Skill Title="Programming languages" data={frontTechs} />
        {/* design */}
        <Skill Title="framework " data={designTechs} />
        {/* others */}
        <Skill Title="Others" data={othersTechs} />
      </div>
    </div>
  );
};

export default Skills;
