import Project from "@/components/Project";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const AcademicProjectsPage = () => {
  const projects = [
    {
      title: "Child Renal",
      description:
        "API of the 1st semester built by the Pixels group that consists of creating an informative website about chronic infantile renal disease with a blog for sharing stories and news.\n\nMy contributions:\n- 1st Sprint: Development of the wireframe, with the main assignment being the Homepage.\n- 2nd Sprint: Database requirements gathering, database implementation, creation of login and session logic.\n- 3rd Sprint: Implementation of post creation and display, both on a single page and on the blog, dynamically placing the blog content.",
      stacks: ["Flask", "MySql"],
    },
    {
      title: "Digital Portfolio",
      description:
        "Creation of a website containing my personal portfolio in the Digital Design discipline. It contains three sections: Presentation about me, projects, and about me.",
      stacks: ["Flask", "Html", "Bootstrap"],
    },
  ];

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
      <h1 className="text-8xl font-bold text-yellow-500 dark:text-rose-500 mb-12 mt-16">
        Academic projects
      </h1>
      <div className="flex flex-wrap gap-8">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            stacks={project.stacks}
            icon={project.icon}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AcademicProjectsPage;
