import React from "react";
import { GiSkills } from "react-icons/gi";
import Skill from "./Skill";
import { techs } from "../Data/Data";
import Title from "../Utilities/Title";
import design from "../../assets/Icons/design.svg";

const Skills = () => {
  const frontTechs = techs.filter(
    (tech) => tech.type === "programming languages"
  );
  const designTechs = techs.filter((tech) => tech.type === "framework");
  const othersTechs = techs.filter((tech) => tech.type === "others");

  return (
    <div name="skills" className="bg-white w-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col w-full min-h-screen">
        <Title
          icon={<GiSkills size={40} className="text-white" />}
          title="Skills"
          description="There is the tools I work with."
        />

        {/* wrapper en row */}
        <div className="flex flex-col md:flex-row  mt-8 gap-8">
          {/* Colonne des skills */}
          <div className="flex flex-col justify-start">
            <Skill Title="Programming languages" data={frontTechs} />
            <Skill Title="Framework" data={designTechs} />
            <Skill Title="Others" data={othersTechs} />
          </div>

          {/* Image à droite */}
          <div className="flex justify-center items-start ">
            <img
              src={design}
              alt="design illustration"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
