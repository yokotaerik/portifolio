import React, { useState } from "react";
import { FaJava } from "react-icons/fa";

const BackendSkills = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-blue-950 dark:text-cyan-500">
        <FaJava size={320} />
      </span>
      <div className="w-1/2">
        <h2 className="text-4xl  font-bold text-yellow-500 dark:text-rose-500 mb-4">
          BACKEND
        </h2>
        <p className="text-2xl">
          I'm an enthusiastic user of the Spring ecosystem, deeply passionate
          about object-oriented programming (OOP), and I often implement the MVC
          architecture in my projects. My expertise extends to both relational
          databases like MySQL, Postgres, and non-relational databases like
          MongoDB. I frequently employ JWT for authentication and utilize
          mappers to streamline DTO creation, enhancing API communication.
        </p>
        <p className="text-2xl">
          Moreover, I prioritize unit testing in my projects and have a keen
          interest in studying microservices and cloud technologies. I've also
          developed applications using Node.js, employing frameworks like
          Express and Nest.js. At my first semesters at college, I crafted a
          blog using Flask.
        </p>
      </div>
    </div>
  );
};

export default BackendSkills;
