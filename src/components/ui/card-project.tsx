import { Project } from "@/type/type";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProjectProps {
  project: Project;
}

export const CardProject = ({ project }: CardProjectProps) => {
  const { title, thumbnail, description, id } = project;
  return (
    <CardContainer>
      <CardBody className="bg-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black w-fit sm:w-[25rem] md:w-[20rem] lg:w-[20rem] xl:w-[25rem] h-auto rounded-xl p-6 border-2 border-r-4 border-b-4">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white h-16 line-clamp-2"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 line-clamp-3 w-full text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={thumbnail}
            alt={thumbnail}
            width="1000"
            height="1000"
            className="h-40 w-full object-cover object-top rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <div>
          <CardItem
            as={Link}
            href={`/projects/detail?id=${id}`}
            className="flex justify-between items-center mt-10"
          >
            <button className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
              <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px" />
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]" />
              <div className="relative w-full flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-rose-300 via-[#e94057] to-watermelon gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                <p className="text-base">View more detail </p>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
