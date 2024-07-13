import React from "react";

const Service = ({ data, Title }) => {
  let NewData = null;
  if (Title) {
    NewData = data.filter((item) => item.service === Title);
  } else {
    NewData = data;
  }

  return (
    <>
      <div className=" flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 text-center py-8 justify-center items-center">
          {NewData.map(({ id, title, src, style, textStyle }) => (
            <div
              key={id}
              className={`flex flex-col justify-center items-center p-5 ${style} w-64 h-52 mx-auto commonStyle`}
            >
              <div className="pt-5 flex w-24 h-24">
                <div className="m-auto w-24 h-24 flex justify-center items-start">
                  {src}
                </div>
              </div>
              <p className={`py-8  font-bold text-md text-start ${textStyle}`}>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
