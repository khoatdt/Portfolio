"use client";
import { CardProject } from "@/components/ui/card-project";
import { listProjects } from "@/data/projects";
import { Project } from "@/type/type";

const project = () => {
  return (
    <div className="pt-20 container h-screen overflow-y-auto">
      <div className="place-items-center">
        <h1
          className={
            "text-3xl md:text-4xl lg:text-5xl font-bold bg-slate-50 border-slate-950 border-2 border-r-8 border-b-8  w-fit p-3 rounded-lg  dark:text-white text-black "
          }
        >
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {listProjects.map((project: Project, index: number) => (
          <CardProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default project;
