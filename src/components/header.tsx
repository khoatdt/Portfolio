"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
declare global {
  interface Window {
    fullpage_api: any; // replace 'any' with the correct type if available
  }
}
const navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <nav className="fixed top-0 w-full bg-seashell shadow-md z-50 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-black">
            Tuan Khoa
          </Link>

          <div className="flex gap-14 h-full">
            <p className="border-l-2 border-black hidden md:block"></p>

            <div className="space-x-6 text-black flex items-center">
              <button
                className="btn btn-sm bg-seashell "
                onClick={() => {
                  if (pathName !== "/") {
                    router.push("/");
                    window.fullpage_api.moveTo(2);
                  }
                  window.fullpage_api.moveTo(2);
                }}
              >
                About
              </button>
              <button className="btn btn-sm bg-seashell ">
                <Link href={"/projects"}>Project</Link>
              </button>
              <button
                className="btn btn-sm bg-seashell "
                onClick={() => {
                  if (pathName !== "/") {
                    router.push("/");
                    window.fullpage_api.moveTo(3);
                  }
                  window.fullpage_api.moveTo(3);
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
