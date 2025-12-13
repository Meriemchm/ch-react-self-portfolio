import React from "react";

const TechBadges = ({ techs }) => {
  return (
    <div className="flex flex-wrap gap-2 ">
      {techs.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 border border-neutral-500 bg-white text-neutral-700 rounded-full text-sm font-medium shadow-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechBadges;
