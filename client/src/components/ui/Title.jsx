import React from "react";

const Title = ({ icon, title, description, direction = "col" }) => {
  return (
    <div className="py-8 w-full" data-aos="fade-up">
      <div
        className={`w-full ${
          direction === "row"
            ? "flex flex-col md:flex-row  items-center justify-between"
            : "flex flex-col gap-2"
        }`}
      >
        {/* LEFT : title / skills {icon && <span>{icon}</span>} */}
        <p className="md:text-5xl text-3xl font-bold text-black Aboreto">
          {title}
        </p>
        <p className="text-gray-900/60 ">{description}</p>
      </div>
    </div>
  );
};

export default Title;
