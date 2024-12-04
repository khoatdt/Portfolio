"use client";
import Image from "next/image";


export function About() {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="flex flex-row justify-between w-full  gap-36">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold border-b-4 border-black pb-4 text-black dark:text-white">
              What I do
            </h1>

            <p className="text-lg md:text-2xl font-medium pt-4">
              I currently working on ReactJS, NextJS, Svelte, and Angular as
              frontend expertise, driven by a passion for crafting visually
              stunning UI and proficiency lies in backend development using the
              .NET Framework, complemented by hands-on experience in
              microservice projects. I'm also an enthusiastic on DevOps ,
              actively exploring AWS, Docker, and Kubernetes. Continuously
              expanding my knowledge, I'm always eager to embrace new
              technologies and trends.
            </p>

            <button className="relative border-2 border-black border-r-4 border-b-4 hover:border-watermelon duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-rose-600 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-700 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-600 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-500 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-400 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-300 delay-150 group-hover:delay-300"></div>
              <p className="z-10">Explore My Work</p>
            </button>
          </div>

          <div className="card bg-base-100 w-full h-96 shadow-xl hidden md:block border-2 border-black border-r-8 border-b-8">
            <figure className="px-6 pt-10">
              {/* <Image
                src={"/PortfolioScreen.png"}
                alt="Shoes"
                className="rounded-xl"
                width={400}
                height={400}
              /> */}
              <img
                src="https://placehold.co/350x400"
                alt="Image holder"
                className=""
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
