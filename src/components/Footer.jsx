import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-8 border-t-2 dark:bg-neutral-800 dark:border-neutral-600">
      <div className="flex justify-evenly items-center px-6">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2 dark:text-rose-500">
            Social Medias
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-950 hover:text-blue-700 dark:text-white"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-950 hover:text-blue-700 dark:text-white"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
        </div>
        <div className="text-center flex flex-col ">
          <p className="text-lg font-semibold">
            All rights reserved © {new Date().getFullYear()}
          </p>
          <div className="flex justify-center items-center">
            <p className="text-lg font-semibold">by</p>
            <span className="font-black text-2xl mx-2 text-yellow-500 dark:text-cyan-500">
              YOKOTA
            </span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold mb-1 dark:text-rose-500">
            Contact Me
          </p>
          <p className="text-blue-950 hover:underline">
            erikcamarayokota@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
