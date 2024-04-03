import Project from "@/components/Project";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

const PersonalProjectPage = () => {
  const projects = [
    {
      title: "Treina y Treina - Workout tracker",
      description:
        "A application developed with React, TypeScript, Java Spring, and MySQL. Its primary function is to store workout performances over time. Users can log their training sessions, including exercises performed, sets, reps, and weights. The application provides a simple interface for easy data input and retrieval. With its efficient backend structure, it ensures quick and reliable storage of training data. Whether you're tracking progress or simply maintaining a training log, our companion offers a straightforward solution for storing workout performances",
      stacks: ["React", "Spring", "MySql"],
      repository: "https://github.com/yokotaerik/gym_workout_tracker"
    },
    {
      title: "Yomaik - Social Media",
      description:
        "Yomaik is a social networking platform designed for users to share thoughts, post updates, and connect with others. It features secure user registration and login, post creation with comment and like functionality, following and followers system, and a personalized feed. Built with Java Spring Boot for the backend and MongoDB for flexible data storage, with a React frontend for interactive user interfaces. Dive in and build connections on Yomaik!",
      stacks: ["React", "Spring", "MongoDB"],
      repository: "https://github.com/yokotaerik/rede_social"
    },
    {
      title: "Easy Project - Project management",
      description:
        "The Project Management System is a web application developed in Java with Spring Framework and using MySQL as the database. It allows managers to create projects, add employees, and assign tasks, facilitating task distribution and monitoring. Focused on efficiency and transparency, the system provides an intuitive way to manage projects, track task progress, and ensure deadlines are met.",
      stacks: ["React", "Spring", "MySql"],
    },
    {
      title: "DoceriaDaNanna - Order Tracker",
      description:
        "DoceriaDaNanna - Order Tracker is an application designed to streamline order management in a bakery or cafe setting. Built with Node.js, React, React Native, and PostgreSQL, it enables users to create tables, add orders associated with each table, and send orders to the kitchen for preparation. Once the kitchen completes an order, the waiter can then deliver it to the respective table. The application features a kitchen dashboard for order management and a mobile app for waiters to create and manage orders. With its efficient backend structure and user-friendly interfaces, DoceriaDaNanna - Order Tracker simplifies the process of managing orders, enhancing the overall customer experience.",
      stacks: ["Node.js", "React", "React Native", "PostgreSQL"],
      repository: "https://github.com/yokotaerik/doceriaDaNanna"
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
      <h1 className="text-7xl md:text-8xl font-bold text-yellow-500 dark:text-rose-500 mb-12 mt-16">
        Personal projects
      </h1>
      <div className="flex flex-wrap gap-8">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            stacks={project.stacks}
            icon={project.icon}
            repository={project.repository}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PersonalProjectPage;
