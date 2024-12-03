"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SocialButton } from "@/components/ui/social-button";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function Introduction() {
  const words = [
    {
      text: "A",
    },
    {
      text: "Passionate",
    },
    {
      text: "Front-end",
      className: "text-watermelon dark:text-watermelon",
    },
    {
      text: "Developer",
      className: "text-watermelon dark:text-watermelon",
    },
  ];
  return (
    <div className="container overflow-hidden">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-10">
          <div className="border-b-4 border-black">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">
              Welcome to,
            </h1>
            <TextGenerateEffect
              duration={2}
              filter={false}
              words={"Tuan Khoa's Portfolio"}
            />
            <TypewriterEffectSmooth words={words} />
          </div>

          <div className="flex gap-2 bg-white w-fit px-4 border-2 border-black border-r-4 border-b-4 rounded-lg">
            {/* github button */}
            <SocialButton to="https://github.com/khoatdt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </SocialButton>

            {/* facebook button */}
            <SocialButton to="https://www.facebook.com/Pha.17.4/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                fill="#4267B2"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </SocialButton>

            {/* linkedin button */}
            <SocialButton to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="1em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288d1"
                  d="M8.421 14h.052 0C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5 5.789 5 4 6.945 4 9.5 4 12 5.736 14 8.421 14zM4 17H13V43H4zM44 26.5c0-5.247-4.253-9.5-9.5-9.5-3.053 0-5.762 1.446-7.5 3.684V17h-9v26h9V28h0c0-2.209 1.791-4 4-4s4 1.791 4 4v15h9C44 43 44 27.955 44 26.5z"
                ></path>
              </svg>
            </SocialButton>
          </div>
        </div>

        <div>
          <div className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 pb-4 hidden md:block max-w-fit ml-10">
            <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
              <span className="text-5xl font-bold">Khoa</span>
              <p className="text-amber-300 font-bold">- Frontend Developer -</p>
            </div>
          </div>

          <div className="w-96 border-t-4 border-black">
            <p className="w-96 text-right mt-2 font-semibold text-xl">
              Hi, I&apos;m Tuan Khoa
            </p>
            <p className="w-96 text-right font-semibold text-base">
              a passionate <Highlight > Front-End Developer</Highlight> dedicated
              to creating seamless and visually stunning websites. I specialize
              in turning ideas into engaging, user-friendly digital experiences
              that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
