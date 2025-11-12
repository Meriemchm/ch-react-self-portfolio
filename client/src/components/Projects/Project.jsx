import React, { useState } from "react";
import { projects } from "../../Data/Data";
import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import HoverButton from "../Utilities/HoverButton";
import ImageCarousel from "../Utilities/ImageCarousel";
import TechBadges from "../Utilities/TechBadges";

const Project = ({ title }) => {
  const project = projects.filter((item) => item.title === title);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="text-black md:ml-10 md:mt-0 mt-4 w-full h-full">
      {project.map(
        ({ id, src, title, description,techs, hcode, hdemo, subRepos, subDemo }) => {
          return (
            <div data-aos="fade-up" key={id} className="flex flex-col  md:mx-5">
              {/* Image */}

              <ImageCarousel images={src} />

              <div className="flex flex-col items-start justify-start text-gray-800 my-4 ">
                <h2 className="text-bold text-xl font-bold capitalize py-2">
                  {title}
                </h2>
                <p dangerouslySetInnerHTML={{ __html: description }} />
              </div>

              <TechBadges techs={techs} />

              {/* Boutons */}
              <div className="flex text-gray-500 relative justify-end">
                {hcode !== "" && (
                  <HoverButton
                    id={id}
                    label="Code"
                    icon={<AiFillGithub size={25} />}
                    link={hcode}
                    subLinks={subRepos}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                  />
                )}

                {hdemo !== "" && (
                  <HoverButton
                    id={id}
                    label="Demo"
                    icon={<CiShare1 size={25} />}
                    link={hdemo}
                    subLinks={subDemo}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    bordered={true}
                  />
                )}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Project;
