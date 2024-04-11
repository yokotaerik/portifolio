import { useLanguage } from "@/contexts/LanguageContext";
import React, { useState } from "react";
import { FaJava } from "react-icons/fa";

const BackendSkills = () => {
  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full">
        <span className="text-blue-950 dark:text-cyan-500">
          <FaJava size={320} />
        </span>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl  font-bold text-yellow-500 dark:text-rose-500 mb-4">
            BACKEND
          </h2>
          <p className="text-2xl">
            Sou um usuário entusiasta do ecossistema Spring e programação
            orientada a objetos (POO). Minha expertise se estende tanto a bancos
            de dados relacionais como MySQL, Postgres, quanto a bancos de dados
            não relacionais como MongoDB. Eu frequentemente uso JWT para
            autenticação e utilizo mappers para simplificar a criação de DTO,
            aprimorando a comunicação da API, se adequando as diferentes
            demandas do camda VIEW.
          </p>
          <p className="text-2xl">
            Além disso, estou estudando sobre testes e comecei a aplicar testes
            unitários em meus projetos e tenho um forte interesse em estudar
            microservices e tecnologias em nuvem como AWS, Azure e Google Cloud.
            Também desenvolvi aplicações utilizando Node.js, empregando
            frameworks como Express e Nest.js. Além de um simples blog em Flask.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full">
        <span className="text-blue-950 dark:text-cyan-500">
          <FaJava size={320} />
        </span>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl  font-bold text-yellow-500 dark:text-rose-500 mb-4">
            BACKEND
          </h2>
          <p className="text-2xl">
            I'm an enthusiastic user of the Spring ecosystem and object-oriented
            programming (OOP). My expertise extends to both relational databases
            like MySQL, Postgres, and non-relational databases like MongoDB. I
            frequently use JWT for authentication and utilize mappers to
            simplify DTO creation, enhancing API communication to fit various
            VIEW layer demands
          </p>
          <p className="text-2xl">
            Additionally, I'm studying testing and have started implementing
            unit tests in my projects. I have a strong interest in studying
            microservices and cloud technologies like AWS, Azure, and Google
            Cloud. I've also developed applications using Node.js, employing
            frameworks such as Express and Nest.js, as well as a simple blog in
            Flask.
          </p>
        </div>
      </div>
    );
  }
};

export default BackendSkills;
