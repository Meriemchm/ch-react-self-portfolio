import React from "react";

const Skill = ({ Title, data }) => {
  return (
    <>
      <h2 className="md:text-2xl text-xl text-gray-500 py-4">{Title}</h2>
      <div data-aos="fade-up"  className="rounded-xl ">
        <div className=" w-full grid grid-cols-3 sm:grid-cols-4 text-center py-8 md:gap-12 sm:px-0 justify-center rounded-2xl">
          {data.map(({ id, title, child, style }) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center   hover:scale-105 duration-500"
            >
              <div className="flex  shadow-md shadow-white/20 md:backdrop-blur-sm rounded-lg  ">
                <div
                  className={`m-auto rounded-full w-20 h-20   flex justify-center items-center ${style}`}
                >
                  {child}
                </div>
              </div>
              <p className="mt-4 text-black text-bold text-sm md:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
