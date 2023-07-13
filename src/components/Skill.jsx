import React from 'react'

const Skill = ({Title,data}) => {
  return (
    <>
    <h2 className="text-2xl text-gray-500 py-4">{Title}</h2>
    <div className='bg-white p-4 rounded-xl shadow-2xl shadow-gray'>
    <div className="bg-gradient-to-r from-purple-500  to-purple-300 w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0 justify-center rounded-2xl">
      {data.map(({ id, title, child, style }) => (
        <div
          key={id}
          className="flex flex-col justify-center items-center   hover:scale-105 duration-500 ${style}"
        >
          <div className="flex  shadow-md shadow-white/20 backdrop-blur-sm bg-white/50 rounded-lg w-16 h-16 ">
            <div className={`m-auto rounded-md w-14 h-14  bg-purple-400 flex justify-center items-center ${style}`}>
              {child}
            </div>
          </div>
          <p className="mt-4 text-bold">{title}</p>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Skill