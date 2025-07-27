import React, { useState } from "react";
import { menuItem } from "../Data/Data";
import Project from "../Projects/Project";
import Animation from "../../assets/Icons/Animation.gif";

const activetext = "text-primary";
const activebg = "border-primary";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(
    menuItem.map((item, index) => index === 0)
  );

  const handleClick = (index) => {
    setActiveTab(index);
    const newActive = menuItem.map((item, i) => i === index);
    setActive(newActive);
  };
  return (
    <>
      <div className="md:w-1/3 md:h-full w-full overflow-x-scroll md:overflow-y-scroll md:overflow-x-hidden ">
        <div className="flex flex-row md:flex-col gap-5 p-2 select-none ">
          {menuItem.map((item, id) => {
            return (
              <div key={id} onClick={() => handleClick(id)}>
                <li
                  className={`flex border md:py-5 px-3 py-3 md:px-5 justify-start items-center md:gap-5 gap-2 bg-gray-100/50 shadow-md lg:w-5/6 rounded-lg cursor-pointer w-44
    ${active[id] ? activebg : ""} relative`}
                >
                  <p
                    className={`text-bold capitalize ${
                      active[id] ? activetext : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </p>

                  {/* Affiche le GIF uniquement si l'élément est actif */}
                  {active[id] && (
                    <img
                      src={Animation}
                      alt="Active"
                      className="w-12 h-12 absolute object-contain right-0 rotate-90"
                    />
                  )}
                </li>
              </div>
            );
          })}
        </div>
      </div>
      <>
        <Project title={menuItem[activeTab].title} />
      </>
    </>
  );
};

export default SideBar;
