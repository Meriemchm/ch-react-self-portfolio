import React, { useState } from "react";
import { menuItem } from "./Data";
import Project from "./Project";
const SideBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="md:w-1/3 md:h-96 shadow-md overflow-y-scroll ">
        <div className="flex flex-row md:flex-col gap-5 p-2  ">
          {menuItem.map((item, id) => {
            return (
              <div key={id} onClick={() => handleClick(id)}>
                <li
                  className="flex py-5 px-5 justify-start items-center gap-5 bg-gray-100 md:w-5/6 rounded-lg cursor-pointer  "
                >
                  <div className="flex  shadow-md shadow-white/50 backdrop-blur-sm bg-purple-200 rounded-lg w-12 h-12 ">
                    <div className="m-auto rounded-md w-10 h-10  bg-purple-400 flex justify-center items-center ">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-second text-bold capitalize">
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
