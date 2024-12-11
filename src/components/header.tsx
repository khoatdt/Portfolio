"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

declare global {
  interface Window {
    fullpage_api: any; // replace 'any' with the correct type if available
  }
}

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const handleAboutClick = () => {
    if (typeof window !== "undefined" && window.fullpage_api) {
      if (pathName !== "/") {
        router.push("/");
        window.fullpage_api.moveTo(2);
      } else {
        window.fullpage_api.moveTo(2);
      }
    }
  };

  const handleContactClick = () => {
    if (typeof window !== "undefined" && window.fullpage_api) {
      if (pathName !== "/") {
        router.push("/");
        window.fullpage_api.moveTo(3);
      } else {
        window.fullpage_api.moveTo(3);
      }
    }
  };

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
                className="btn btn-sm bg-seashell"
                onClick={handleAboutClick}
              >
                About
              </button>
              <Link href={"/projects"} className="btn btn-sm bg-seashell">
                Projects
              </Link>
              <button
                className="btn btn-sm bg-seashell"
                onClick={handleContactClick}
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

export default Navbar;
