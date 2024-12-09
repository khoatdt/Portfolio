"use client";
import Image from "next/image";
import ExploreButton from "./ui/explore-button";

export function About() {
  return (
    <>
      <div className="container overflow-hidden">
        <div className="flex flex-row justify-between w-full gap-20">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold border-b-4 border-black pb-4 text-black dark:text-white">
              What I do
            </h1>

            <p className="text-lg md:text-2xl font-medium pt-4">
              I currently working on ReactJS, NextJS, Svelte, and Angular as
              frontend expertise, driven by a passion for crafting visually
              stunning UI and proficiency lies in backend development using the
              .NET Framework, complemented by hands-on experience in
              microservice projects. I&apos;m also an enthusiastic on DevOps ,
              actively exploring AWS, Docker, and Kubernetes. Continuously
              expanding my knowledge, I&apos;m always eager to embrace new
              technologies and trends.
            </p>

            {/* <ButtonExplore /> */}
            <ExploreButton />
          </div>

          <div className="card bg-base-100 w-full h-96 shadow-xl hidden xl:block border-2 border-black border-r-8 border-b-8">
            <figure className="px-6 pt-8">
              <Image
                src={"/PortfolioImage.jpg"}
                alt="Shoes"
                className="rounded-xl"
                width={400}
                height={400}
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
