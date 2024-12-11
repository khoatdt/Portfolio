"use client";

import Image from "next/image";
import { listProjects } from "@/data/projects";
import Link from "next/link";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { useSearchParams } from "next/navigation";

export const ProjectDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const project = listProjects.find((project) => project.id === Number(id));

  return (
    <div className="pt-20 container ">
      <button
        className="bg-white text-center w-48 rounded-xl h-14 relative border-2 border-black border-r-4 border-b-4 text-black text-xl font-semibold group"
        type="button"
      >
        <Link href={`/projects`}>
          <div className="bg-success rounded-lg h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[175px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25px"
              width="25px"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#000000"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
              ></path>
            </svg>
          </div>
        </Link>
        <p className="translate-x-2">Go back</p>
      </button>

      <h1
        className={
          "text-4xl md:text-5xl text-center lg:text-6xl font-bold w-full  dark:text-white text-black pt-5"
        }
      >
        {project?.title}
      </h1>
      <div className="flex justify-center items-center">
        <hr className="my-5 h-0.5 border-t-0 bg-black w-1/4" />
      </div>
      <div className="backdrop-blur-lg p-4 shadow-lg bg-white rounded-xl border-black border-2 border-b-4 mb-5">
        <div className="flex p-2 gap-1 mb-2">
          <div className="">
            <span className="bg-watermelon inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-success box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <div className="card__content">
          {" "}
          <p className="text-lg">{project?.description}</p>
          <div className="flex gap-4 py-2 flex-wrap">
            <h2 className="text-xl font-bold">Role:</h2>
            {project?.role.map((role, index) => (
              <p className="text-md badge-warning p-1" key={index}>
                {role}
              </p>
            ))}
          </div>
          <h2 className="text-xl font-bold">
            Objective:{" "}
            <span className="text-slate-600 font-semibold">
              {project?.objective}
            </span>
          </h2>
          <div className="flex justify-center mt-4 items-center flex-col ">
            <h1
              className={"text-4xl font-bold  dark:text-white text-black  "}
            >
              Features
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  w-fit">
              {project?.features?.map((feature, index) => (
                <PinContainer key={index} title={feature.description}>
                  <div className=" p-2 tracking-tight flex flex-col justify-center items-center gap-2 text-slate-100/50  w-[15rem] h-[8rem]  ">
                    <h3 className=" pb-2 font-bold text-center text-black">
                      {feature.name}
                    </h3>

                    <div className="flex justify-center items-center w-full text-black">
                      <feature.icon size={60} />
                    </div>
                  </div>
                </PinContainer>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-10 w-full items-center flex-col ">
            <h1 className={"text-4xl font-bold dark:text-white text-black  "}>
              Tech Experience
            </h1>

            <div className="grid my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 ">
              {project?.technical.map((tech, index) => (
                <div
                  key={index}
                  className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute blur z-10 fill-amber-200 duration-500 group-hover:blur-none group-hover:scale-105"
                  >
                    <path
                      transform="translate(100 100)"
                      d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                    ></path>
                  </svg>

                  <div className="z-20 flex flex-col justify-center items-center space-y-4">
                    <span className="font-bold text-lg ml-2 text-center">
                      {tech.name}
                    </span>
                    <tech.icon />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 w-full items-center flex-col ">
            <h1 className={"text-4xl  font-bold dark:text-white text-black "}>
              Screen shot
            </h1>
            <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center space-x-2">
              {project?.screenshots?.map((screenshot, index) => (
                <Image
                  src={screenshot.src}
                  alt={screenshot.id.toString()}
                  className="rounded-xl shadow-xl"
                  width={1000}
                  height={600}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="backdrop-blur-lg p-4 shadow-lg bg-white rounded-xl"></div> */}
    </div>
  );
};

export default ProjectDetails;
