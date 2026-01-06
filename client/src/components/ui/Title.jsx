import React from "react";

const Title = ({icon,title,description}) => {
  return (
    <div className="mt-8" data-aos="fade-up">
      <div className="flex gap-3">
        {/* <div className="bg-primary flex justify-center items-center px-2 rounded-lg ">
          {icon}
        </div> */}
        <p className="md:text-6xl text-3xl text-start text-black font-bold inline Aboreto">{title}</p>
      </div>{" "}
      <p className="py-6 text-gray-900/60 text-semibold">
        {description}
      </p>
    </div>
  );
};

export default Title;
