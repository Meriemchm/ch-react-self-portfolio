import React from "react";

const Title = ({icon,title,description}) => {
  return (
    <div className="mt-8" data-aos="fade-up">
      <div className="flex flex-col gap-1">
         {/* <p className="md:text-4xl text-3xl text-start text-black font-bold inline Aboreto">
          ---
        </p>  */}
        <p className="md:text-5xl text-3xl text-start text-black font-bold inline Aboreto">{title}</p>
      </div>{" "}
      <p className="py-6 text-gray-900/60 text-semibold">
        {description}
      </p>
    </div>
  );
};

export default Title;
