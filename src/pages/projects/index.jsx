import Project from "@/components/Project";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  FaPeopleCarry,
  FaSchool,
  FaSmile,
  FaUniversity,
  FaUser,
  FaUserNinja,
  FaUserSecret,
} from "react-icons/fa";
import Link from "next/link";

const ProjectsPage = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = { duration: 0.75, ease: "easeInOut" };

  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      <Head>
        <title>Projects | Yokota</title>
      </Head>
      <h1 className="text-8xl font-bold text-yellow-500 dark:text-rose-500 mb-24 mt-16">
        Projects
      </h1>
      <div className="flex flex-wrap gap-24">
        <Link href={"/projects/academic"}>
          <div className="flex gap-10">
            <span className="text-blue-950 dark:text-white">
              <FaUniversity size={320} />
            </span>
            <div>
              <h2 className="text-4xl font-bold text-yellow-500 dark:text-cyan-500 mb-4">
                ACADEMIC PROJECTS
              </h2>
              <p className="text-2xl">
                Here we have my projects developed at FATEC on Multiplatform
                Software Development.
              </p>
            </div>
          </div>
        </Link>

        <Link href={"/projects/personal"}>
          <div className="flex gap-10">
            <span className="text-blue-950 dark:text-white">
              <FaUserSecret size={320} />
            </span>
            <div>
              <h2 className="text-4xl font-bold text-yellow-500 dark:text-cyan-500 mb-4">
                PERSONAL PROJECTS
              </h2>
              <p className="text-2xl">
                Here we have my personal projects developed outside of academic
                settings.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
