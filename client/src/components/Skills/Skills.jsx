import { GiSkills } from "react-icons/gi";
import Skill from "./Skill";
import { Techs } from "../../Data/Techs";
import Title from "../ui/Title";
import design from "../../assets/Icons/design.svg";

const Skills = () => {
  const programmingTechs = Techs.filter(
    (tech) => tech.type === "programming languages"
  );
  const frameworkTechs = Techs.filter((tech) => tech.type === "framework");
  const databaseTechs = Techs.filter((tech) => tech.type === "database & backend");
  const othersTechs = Techs.filter((tech) => tech.type === "others");

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
            <Skill Title="Programming languages" data={programmingTechs} />
            <Skill Title="Framework" data={frameworkTechs} />
            <Skill Title="Database" data={databaseTechs} />
            <Skill Title="Others" data={othersTechs} />
          </div>

          {/* Image à droite */}
          <div className="flex justify-center items-start " data-aos="fade-up">
            <img
              src={design}
              alt="design illustration"
              className="hover:scale-105 duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
