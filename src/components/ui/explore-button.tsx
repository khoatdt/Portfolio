import React from "react";
import { useRouter } from "next/navigation";
const ExploreButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/projects")}
      className="relative border-2 border-black border-r-4 border-b-4 hover:border-watermelon duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-rose-600 p-2 flex justify-center items-center font-extrabold"
    >
      <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-700 delay-150 group-hover:delay-75"></div>
      <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-600 delay-150 group-hover:delay-100"></div>
      <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-500 delay-150 group-hover:delay-150"></div>
      <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-400 delay-150 group-hover:delay-200"></div>
      <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-rose-300 delay-150 group-hover:delay-300"></div>
      <p className="z-10">Explore My Work</p>
    </button>
  );
};

export default ExploreButton;
