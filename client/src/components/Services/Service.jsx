import { FiArrowUpRight } from "react-icons/fi";

const Service = ({ data }) => {
  return (
    <div className="relative w-full py-16">
      {/* LINES — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Top row vertical line */}
        <div className="absolute top-20 left-1/2 h-72 w-px bg-gray-300" />
        {/* Bottom row vertical line */}
        <div className="absolute bottom-20 left-1/2 h-72 w-px bg-gray-300" />
        {/* Horizontal line */}
        <div className="absolute left-2 right-2 top-1/2 h-px bg-gray-300" />
      </div>

      {/* GRID */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
        {data.map(({ id, src, title, description, active, style }) => (
          <div
            key={id}
            className={`
              relative p-8 h-72
              flex flex-col justify-between
              transition-colors duration-300
              rounded-lg
              
              /* MOBILE */
              border border-gray-300

              /* DESKTOP */
              md:border-none
              text-black
              md:m-2

              ${style}
              hover:bg-third/20 transition duration-200
            `}
          >
            {/* TITLE */}
            <h3 className="text-2xl font-medium whitespace-pre-line max-w-[250px] sm:max-w-md">
              {title}
            </h3>

            {/* DESCRIPTION */}
            <p className={`text-sm max-w-xs `}>{description}</p>

            {/* ARROW */}
            <div className={`absolute md:bottom-8 right-8 text-2xl `}>
              {src}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
