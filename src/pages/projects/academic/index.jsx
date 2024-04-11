import Project from "@/components/Project";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useLanguage } from "@/contexts/LanguageContext";

const AcademicProjectsPage = () => {
  const projects = [
    {
      title: "Criança Renal",
      description:
        "API of the 1st semester built by the Pixels group that consists of creating an informative website about chronic infantile renal disease with a blog for sharing stories and news.\n\nMy contributions:\n- 1st Sprint: Development of the wireframe, with the main assignment being the Homepage.\n- 2nd Sprint: Database requirements gathering, database implementation, creation of login and session logic.\n- 3rd Sprint: Implementation of post creation and display, both on a single page and on the blog, dynamically placing the blog content.",
      stacks: ["Flask", "MySql"],
      repository: "https://github.com/Daiene/Pixels",
    },
    {
      title: "Digital Portfolio",
      description:
        "Creation of a website containing my personal portfolio in the Digital Design discipline. It contains three sections: Presentation about me, projects, and about me.",
      stacks: ["Flask", "Html", "Bootstrap"],
      repository: "https://github.com/yokotaerik/portifolio_digital_dsm",
    },
  ];

  const projetos = [
    {
      title: "Criança Renal",
      description:
        "API do 1º semestre construída pelo grupo Pixels que consiste em criar um site informativo sobre doença renal crônica infantil com um blog para compartilhar histórias e notícias.\n\nMinhas contribuições:\n- 1ª Sprint: Desenvolvimento do wireframe, com a principal atribuição sendo a Homepage.\n- 2ª Sprint: Levantamento de requisitos do banco de dados, implementação do banco de dados, criação de lógica de login e sessão.\n- 3ª Sprint: Implementação da criação e exibição de posts, tanto em uma página única quanto no blog, colocando dinamicamente o conteúdo do blog.",
      stacks: ["Flask", "MySql"],
      repository: "https://github.com/Daiene/Pixels",
    },
    {
      title: "Portfólio Digital",
      description:
        "Criação de um site contendo meu portfólio pessoal na disciplina de Design Digital. Ele contém três seções: Apresentação sobre mim, projetos e sobre mim.",
      stacks: ["Flask", "Html", "Bootstrap"],
      repository: "https://github.com/yokotaerik/portifolio_digital_dsm",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = { duration: 0.75, ease: "easeInOut" };

  const { language } = useLanguage();

  if (language === "pt") {
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
        <h1 className="text-7xl md:text-8xl font-bold text-yellow-500 dark:text-rose-500 mb-12 mt-16">
          Projetos acadêmicos
        </h1>
        <div className="flex flex-wrap gap-8">
          {projetos.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              stacks={project.stacks}
              repository={project.repository}
              icon={project.icon}
            />
          ))}
        </div>
      </motion.div>
    );
  } else {
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
        <h1 className="text-7xl md:text-8xl font-bold text-yellow-500 dark:text-rose-500 mb-12 mt-16">
          Academic projects
        </h1>
        <div className="flex flex-wrap gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              stacks={project.stacks}
              repository={project.repository}
              icon={project.icon}
            />
          ))}
        </div>
      </motion.div>
    );
  }
};

export default AcademicProjectsPage;
