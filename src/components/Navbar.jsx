import React, { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import rosto from "../images/rosto.jpg";
import Image from "next/image";

function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <nav className="flex justify-evenly md:justify-between items-center pt-16">
      <div className="flex justify-center items-center gap-4">
        <Image
          src={rosto}
          alt="minha-foto"
          width={50}
          className="rounded-full"
        />
        <p className="text-xl font-semibold  hidden md:block">Erik Yokota</p>
      </div>
      <div className="flex flex-row">
        {[
          ["home", "/"],
          ["projects", "/projects"],
          ["about", "/about"],
        ].map(([title, url]) => (
          <Link key={title} href={url} passHref>
            <p
              className={`px-3 py-1 font-medium hover:border-slate-200 hover:border-b-4 dark:hover:border-slate-800 dark:text-white ${
                router.pathname === url
                  ? "border-yellow-400 dark:border-cyan-500 border-b-4"
                  : "border-transparent"
              }`}
            >
              {title}
            </p>
          </Link>
        ))}
        <button onClick={toggleTheme} className="px-4">
          {theme === "dark" ? (
            <p>
              <MdSunny size={20} />
            </p>
          ) : (
            <p>
              <FaMoon size={15} />
            </p>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
