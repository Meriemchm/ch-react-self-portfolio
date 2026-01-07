import React from "react";

const HoverButton = ({
  id,
  label,
  icon,
  link,
  subLinks,
  openMenu,
  setOpenMenu,
  bordered = false,
}) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(`${label}-${id}`)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button
        className={`flex w1/2 px-6 py-3 m-4 duration-200 hover:scale-105 items-center ${
          bordered ? "border rounded-full" : ""
        }`}
      >
        <span className="font-bold md:text-lg text-base">{label}</span>
        <span className="ml-2">{icon}</span>
      {!subLinks && link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 "
        ></a>
      )}
      </button>

      {/* Dropdown si plusieurs liens */}
      {subLinks && openMenu === `${label}-${id}` && (
        <div className="absolute right-0 top-14 bg-white border rounded-md shadow-lg flex flex-col z-20">
          {subLinks.map(({ label: subLabel, link: subLink }) => (
            <a
              key={subLabel}
              href={subLink}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 hover:bg-gray-100 text-gray-800"
            >
              {subLabel}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HoverButton;
