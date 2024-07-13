import React from "react";
import { projects } from "../Data/Data";
import { AiFillGithub } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";

const Project = ({ title }) => {
  const project = projects.filter((item) => item.title === title);
  return (
    <div className="text-black md:ml-10 md:mt-0 mt-10 w-full h-full">
      {" "}
      {project.map(({ id, src, title, description, hcode, hdemo }) => {
        return (
          <div data-aos="fade-up"  key={id} className="flex flex-col ">
            <img
              src={src}
              alt=""
              className="rounded-md h-full w-full object-cover"
            />

            <div className="flex flex-col items-start justify-start text-gray-800 mx-5 my-4 ">
              <h2 className="text-bold text-xl font-bold capitalize py-2">
                {title}
              </h2>
              <p>{description}</p>
            </div>
            <div className="flex text-gray-500 ">
              {hcode !== "" ? (
                <button className="flex w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={hcode} target="_blank" rel="noreferrer">
                    Code
                  </a>
                  <span>
                    <AiFillGithub size={25} className="ml-2" />
                  </span>
                </button>
              ) : null}

              <button className="flex w1/2 px-6 py-3 m-4 duration-200 border-2 border-black/50 rounded-md hover:scale-105 text-bold">
                <a href={hdemo} target="_blank" rel="noreferrer">
                  Demo{" "}
                </a>

                <span>
                  <CiShare1 size={20} className="ml-2 mt-1 text-gray-500 " />
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
