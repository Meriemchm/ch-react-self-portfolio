
import { GoProjectSymlink } from "react-icons/go";
import SideBar from "../ui/SideBar";
import Title from "../ui/Title";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div name="projects" className="bg-white w-full min-h-screen">
      <div className="max-w-screen-lg py-12 mx-auto  flex flex-col items-start w-full h-full ">
        <Title
          icon={<GoProjectSymlink size={40} className="text-white" />}
          title="Projects"
          description="There is my work."
        />
        {/*projects*/}
        <div className="flex flex-col md:flex-row w-full">
          <SideBar />
        </div>

        <div>
          <a
            href="https://github.com/Meriemchm"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 py-6 hover:scale-105 duration-200 transition-transform"
          >
            <h2 className="self-center font-bold underline md:text-xl text-base">
              For more projects visit my github
            </h2>
            <span>
              <FaGithub size={30} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
