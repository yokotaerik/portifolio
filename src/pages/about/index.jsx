import React from "react";
import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import profilePic from "../../images/about-me.jpg";

const AboutMe = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = { duration: 0.75, ease: "easeInOut" };

  return (
    <motion.div
      className="flex flex-col gap-28 p-4"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      <Head>
        <title>About me | Yokota</title>
      </Head>
      <motion.h1
        className="text-7xl md:text-8xl font-bold text-yellow-500 dark:text-rose-500"
        variants={variants}
        transition={transition}
      >
        Greetings!
      </motion.h1>
      <div className="flex flex-col lg:flex-row justify-start gap-8">
        <motion.div variants={variants} transition={transition}>
          <div className="lg:w-[470px] w-full shadow-md">
            <Image src={profilePic} alt="Picture of the author" />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6"
          variants={variants}
          transition={transition}
        >
          <p className="text-2xl font-semibold">
            My name is Erik Camara Yokota, and I am a Full-Stack Software
            Developer born and raised in São Paulo, Brazil.
          </p>
          <p className="text-2xl font-semibold">
            I started programming in 2023, and from the moment I wrote my first
            line of code, I knew this was my calling. Since then, I&apos;ve
            dedicated myself to improving my skills and knowledge in this
            exciting field every day.
          </p>
          <p className="text-2xl font-semibold">
            Currently, my focus is on enhancing my backend development skills
            and building personal applications to solve my own problems and
            those of my friends.
          </p>
        </motion.div>
      </div>

      <div className="w-4/5 flex flex-col gap-12">
        <div>
          <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-2">
            Work
          </h2>
          <p className="text-xl font-semibold">
            Until this moment, I haven&apos;t worked at any company.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-4">
            Stacks
          </h2>
          <span className="flex text-8xl gap-4 text-blue-950 dark:text-white flex-wrap ">
            <FaPython title="Python" />
            <FaJava title="Java" />
            <IoLogoJavascript title="JavaScript" />
            <FaGitAlt title="Git" />
            <FaReact title="React" />
            <BsFiletypeSql title="SQL" />
            <BiLogoMongodb title="MongoDB" />
            <FaHtml5 title="HTML5" />
            <FaCss3 title="CSS3" />
          </span>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-950 dark:text-cyan-500 mb-2">
            AFK
          </h2>
          <p className="text-xl font-semibold">
            Away From Keyboard, I enjoy going to the gym, cooking delicious
            foods, and spending time with my girlfriend.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
