"use client";
import { CardProject } from "@/components/ui/card-project";
import { listProjects } from "@/data/projects";

const project = () => {
  return (
    <>
      {listProjects.map((project: any, index: number) => (
        <CardProject key={index} project={project} />
      ))}
    </>
  );
};

export default project;
