import React from "react";

const Title = ({icon,title,description}) => {
  return (
    <div className="mt-8">
      <div className="flex gap-3">
        <div className="bg-primary flex justify-center items-center px-2 rounded-lg ">
          {icon}
        </div>
        <p className="text-4xl text-black font-bold p-2 inline">{title}</p>
      </div>{" "}
      <p className="py-6 text-gray-900/80 text-semibold">
        {description}
      </p>
    </div>
  );
};

export default Title;
