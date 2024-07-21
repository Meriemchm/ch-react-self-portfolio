import React, { Suspense } from "react";
import { links } from "../Data/Data";
import Cylinder3d from "../Cylinder3d/Cylinder3d";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Scene from "../../../public/Scene";

const Presentation = () => {
  return (
    <div
      data-aos="fade-up"
      name="home"
      className="flex min-h-screen w-full relative "
    >
      <div className="absolute inset-0  mx-auto justify-center items-center h-full px-5 sm:px-0 sm:w-1/2">
        <div className="flex flex-col justify-center h-full gap-8  ">
          <div className="flex flex-col justify-center ">
            <h2 className="text-4xl md:text-5xl xl:text-6xl self-center font-bold py-5 ">
              Welcome !
            </h2>
            {/* <div className="flex justify-start items-start absolute -top-20 ">
              <Canvas className="">
                {/* <pointLight position={[10, 10, 10]} /> */}
                {/* <ambientLight /> */}
                {/* <Suspense fallback={null}>
                  <ambientLight intensity={1.5} />
                  <OrbitControls enableZoom={false} autoRotate={true} rotateSpeed={0.25} />
                  <Scene  />
                </Suspense>

                <Environment preset="sunset" />
              </Canvas>
            </div> */} 

            <p className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 text-3xl md:text-6xl xl:text-7xl font-bold text-right">
              Software Developer <span className="text-black">Here</span>
            </p>
          </div>
          <div className="flex  ">
            <ul className="flex flex-row ">
              {links.map(({ id, mobile, href, download }) => {
                return (
                  <li key={id} className="mr-5 hover:scale-105 duration-200">
                    <a
                      href={href ? href : "/"}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-between items-center w-full text-black "
                    >
                      {mobile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
