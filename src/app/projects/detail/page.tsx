import Image from "next/image";
import { listProjects } from "@/data/projects";
import Link from "next/link";

export const ProjectDetails = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string[] | undefined };
}) => {
  const project = listProjects.find(
    (project) => project.id === Number(searchParams.id)
  );

  return (
    <div className="pt-20 container ">
      <button
        className="bg-white text-center w-48 rounded-xl h-14 relative border-2 border-black border-r-4 border-b-4 text-black text-xl font-semibold group"
        type="button"
      >
        <Link className="font-bold text-2xl" href={`/projects`}>
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
        <p className="translate-x-2 text-semibold">Go back</p>
      </button>

      <h1
        className={
          "text-4xl md:text-5xl text-center lg:text-6xl font-bold w-full  dark:text-white text-black  "
        }
      >
        {project?.title}
      </h1>
      <div className="flex justify-center items-center">
        <hr className="my-5 h-0.5 border-t-0 bg-black w-1/4" />
      </div>
      <div className="backdrop-blur-lg p-4 shadow-lg bg-white rounded-xl border-black border-2">
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
              <p className="text-md badge-ghost" key={index}>
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
          <div className="flex justify-center mt-4 w-full items-center flex-col ">
            <h1
              className={"text-4xl  font-bold   dark:text-white text-black  "}
            >
              Features
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  ">
              {/* {project?.features?.map((feature, index) => (
      <PinContainer key={index} title={feature.description}>
        <div className=" p-2 tracking-tight flex flex-col justify-center items-center gap-2 text-slate-100/50  w-[15rem] h-[8rem]  ">
          <h3 className=" !pb-2   font-bold  text-center text-slate-100">
            {feature.name}
          </h3>

          <div className="flex justify-center items-center w-full ">
            <feature.icon size={60} />
          </div>
        </div>
      </PinContainer>
    ))} */}
            </div>
          </div>
          <div className="flex justify-center mt-10 w-full items-center flex-col ">
            <h1
              className={"text-4xl  font-bold   dark:text-white text-black  "}
            >
              Tech Experience
            </h1>

            <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 ">
              {project?.technical.map((tech, index) => (
                <div
                  key={index}
                  className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4  relative h-[12rem]"
                >
                  {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard text={tech.name} svg={<tech.icon />} /> */}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 w-full items-center flex-col ">
            <h1 className={"text-4xl  font-bold dark:text-white text-black "}>
              Screen shot
            </h1>
            <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center">
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
