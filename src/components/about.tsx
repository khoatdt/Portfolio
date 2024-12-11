"use client";
import Image from "next/image";
import ExploreButton from "./ui/explore-button";
import { Highlight } from "./ui/hero-highlight";

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
              I am a <Highlight> frontend developer</Highlight> specializing in
              <Highlight>ReactJS, NextJS, Svelte, and Angular</Highlight>, with
              a strong passion for crafting visually stunning and highly
              functional user interfaces. My expertise extends to{" "}
              <Highlight>
                creating seamless and intuitive UX/UI designs
              </Highlight>{" "}
              that enhance user experiences and bring ideas to life. I am
              dedicated to staying updated with the latest design and
              development trends, always eager to embrace new technologies and
              push the boundaries of creativity in web development.
            </p>

            {/* <ButtonExplore /> */}
            <ExploreButton />
          </div>

          <div className="card bg-base-100 w-full h-96 shadow-xl hidden xl:block border-2 border-black border-r-8 border-b-8">
            <figure className="px-6 pt-8">
              <Image
                src={"/PortfolioImage.jpg"}
                alt="PortfolioImage"
                className="rounded-xl"
                width={1000}
                height={1000}
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
