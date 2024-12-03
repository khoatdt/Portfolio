"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => {
    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/"); 
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
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
                onClick={() => handleScroll("about")}
              >
                About
              </button>
              <button
                onClick={() => handleScroll("projects")}
                className="btn btn-sm bg-seashell"
              >
                Projects
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="btn btn-sm bg-seashell"
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
