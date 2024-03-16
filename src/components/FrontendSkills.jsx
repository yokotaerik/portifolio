import React from "react";
import { FaReact } from "react-icons/fa";

const FrontendSkills = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <h2 className="text-4xl font-bold text-yellow-500 dark:text-rose-500 mb-4">
          FRONTEND
        </h2>
        <p className="text-2xl">
          Most of the time, I prefer to utilize the React framework, especially
          Next.js, coupled with TypeScript to develop web applications. I find
          that TypeScript enhances code maintainability and provides a better
          development experience overall. Additionally, I often leverage
          Tailwind CSS as a utility-first CSS framework to streamline the
          styling process, allowing for faster development iterations.
        </p>
        <p className="text-2xl">
          In terms of mobile app development, I have experience working with
          React Native. It's a powerful framework that allows for building
          cross-platform mobile applications using JavaScript and React. With
          React Native, I can efficiently develop mobile apps for both iOS and
          Android platforms, maximizing code reusability and reducing
          development time.
        </p>
      </div>
      <span className="text-blue-950 dark:text-cyan-500">
        <FaReact size={320} />
      </span>
    </div>
  );
};

export default FrontendSkills;
