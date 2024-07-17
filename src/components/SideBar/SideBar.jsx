import React, { useState } from "react";
import { menuItem } from "../Data/Data";
import Project from "../Projects/Project";

const activeButton = "bg-four";
const activeColor = "bg-four/50";
const activetext = "text-four";
const activebg = "border-four";


const SideBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(menuItem.map((item, index) => index === 0));

  const handleClick = (index) => {
    setActiveTab(index);
    const newActive = menuItem.map((item, i) => i === index);
    setActive(newActive);
  };
  return (
    <>
      <div className="md:w-1/3 md:h-full  overflow-y-scroll ">
        <div className="flex flex-row md:flex-col gap-5 p-2 select-none ">
          {menuItem.map((item, id) => {
            return (
              <div key={id} onClick={() => handleClick(id)}>
                <li
                  className={`flex border md:py-5 px-3 py-3 w-full md:px-5 justify-start items-center md:gap-5 gap-2 bg-gray-100/50 shadow-md lg:w-5/6 rounded-lg cursor-pointer 
                  ${active[id] ? activebg : ""
                }`} 
                >
                  <p className={` text-bold capitalize ${active[id] ? activetext : "text-second"
                  }`}>
                    {" "}
                    {item.title}
                  </p>
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
