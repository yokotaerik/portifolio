import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectOnFatecApi from "@/components/ProjectOnFatecApi";

const AcademicProjectsPage = () => {
  const projects = [
    {
      title: "Woodpecker - HelpDesk",
      description:
        "2nd semester API built by Team H.I.V.E, aimed at creating a HelpDesk system for a fictional company called Woodpecker.\n\nMy contributions:\n- 1st Sprint: Contributed to requirements elicitation and database modeling.\n- 2nd Sprint: Initial construction of the API with Node.js and React, CRUD operations, and authentication system using JWT.\n- 3rd Sprint: Implementation of ticket creation and display, implementation of image handling both in the backend and frontend, complex CRUD operations, and creation of permission middlewares.\n- 4th Sprint: Creation of charts using ReCharts with React and an endpoint to return ticket metrics for the chart.",
      stacks: ["Node", "React", "MySql"],
      repository: "https://github.com/TeamHiveAPI/API-2024.01",
      softSkills: `In this project, I acted as Scrum Master, ensuring the team followed agile practices and delivered the project on time.\nA challenge I faced was that my group was polarized, with half not communicating with the other. It was a challenge during the first 2 sprints until the group reached an agreement and established a communication rhythm. Fortunately, despite the lack of communication, deliveries were always on time.\nAdditionally, through communication and teamwork, I was able to technically assist the team. Having prior experience with React and Node, I could help my colleagues with basic technical questions, such as fixing REST and consuming APIs from the frontend.`,
    },
    {
      title: "Criança Renal",
      description:
        "API of the 1st semester built by the Pixels group that consists of creating an informative website about chronic infantile renal disease with a blog for sharing stories and news.\n\nMy contributions:\n- 1st Sprint: Development of the wireframe, with the main assignment being the Homepage.\n- 2nd Sprint: Database requirements gathering, database implementation, creation of login and session logic.\n- 3rd Sprint: Implementation of post creation and display, both on a single page and on the blog, dynamically placing the blog content.",
      stacks: ["Flask", "MySql"],
      repository: "https://github.com/Daiene/Pixels",
      softSkills: `Using proactivity and teamwork, Kauê and I were responsible for implementing the backend, and together we overcame the challenge of image upload for the blog, which was very complex for us.\nAdditionally, whenever a group member couldn't solve a problem, I used resilience and positivity to tackle tasks that my colleagues couldn't due to technical difficulties.\nAfter all, they were beginners in programming, and I had some prior experience from online courses, so I used that to meet deadlines.`,
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
      title: "FAPG - Portal de transparência",
      description: `API do 3° semestre construída pelo grupo Syncm que consiste em um portal de transparência para a fundação FPGA,
  sendo possível que o administrador publique os projetos realizados pela fundação, gerando a transparência necessária que o órgão demanda.
  Além disso, para fins internos, é possível administrar os bolsistas, relatórios através de dashboards interativas e auditoria das alterações dos projetos. \n
  Minhas contribuições:
  - 1ª Sprint: Modelagem do banco de dados e criação inicial da estrutura do projeto. Fui responsável pela implementação do sistema de autenticação via JWT, tanto na tela quanto no backend, além da integração com o backend para adicionar anexos e criar projetos.\n
  - 2ª Sprint: Fui responsável pela filtragem dos dados dos projetos através de palavras-chave utilizando predicates no repositório Java, além de criar todo o fluxo responsável por filtrar os projetos que estão prestes a vencer e colocá-los em uma tela de alerta. Ademais, também contribuí para a refatoração do frontend.\n
  - 3ª Sprint: Fui responsável por criar os campos sensíveis dos projetos, que o administrador pode ocultar do público geral. Construí todo o fluxo desde o backend ao frontend, além de ajudar a estilizar o frontend e criar um componente para download de arquivos PDF e Excel.\n
  - 4ª Sprint: Em progresso.`,
      stacks: [
        "Spring Boot - Uso com autonomia e podenendo ajudar colegas a aprender",
        "React - Uso com autonomia ",
        "MySql - Uso com autonomia",
      ],
      softSkills: `Através do trabalho em equipe e comunicação, apesar de não atuar diretamente na codificação de algumas features, pude ajudar meus colegas desenhando soluções de como resolver as features.
      Além disso, como a minha equipe acabou recebendo novos integrantes, tentei ajudar os novos integrantes a se integrar no nosso projeto, pois para eles a estrutura era completamente nova.
      Um bom exemplo foi quando o Claudio tinha uma task de refatorar e reorganizar a estrutura do back-end, sentei junto com ele e expliquei algumas boas práticas e conhecimentos que eu tinha.
      Ali fomos responsáveis por desenvolver a nova estrutura do back-end para uma melhor arquitetura e escalabilidade do projeto.`,
      repository: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
    },
    {
      title: "Woodpecker - HelpDesk",
      description: `API do 2° semestre contruida pelo grupo Team H.I.V.E que consiste em criar um sistema de HelpDesk para uma empresa fictícia chamada Woodpecker.\n
      Minhas contribuições:\n
      - 1ª Sprint: Contruibui para elicitação de requisitos e modelagem do banco de dados.\n
      - 2ª Sprint: Construção inicial da API do NODE e React, CRUD e Sistema de autenticação usando JWT.\n
      - 3ª Sprint: Implementação da criação e exibição de tickcets, implentação de imagens tanto no backend quanto no frontend e CRUDS complexos e criação de middlewares de permissões.\n
      - 4ª Criação de gráficos utilizando o ReCharts com React e endpoint para retornar as métricas de tickets para o gráfico.`,
      stacks: [
        "Node - Uso com Autonomia e pude ajudar colegas a aprender ",
        "React - Uso com Autonomia e pude ajudar colegas a aprender",
        "MySql - Uso com autonomia",
      ],
      softSkills: `Nesse projeto, atuei como Scrum Master, onde eu era responsável por garantir que o time seguisse as práticas ágeis e que o projeto fosse entregue no prazo.\n
      Um desafio que enfrentei foi que o meu grupo era polarizado, onde metade do grupo não conversava com a outra. Então, foi um desafio durante as 2 primeiras sprints até que o grupo entrasse em um acordo e conseguíssemos um ritmo de comunicação. Felizmente, apesar da falta de comunicação, as entregas sempre estavam em dia.\n
      Além disso, através da comunicação e trabalho em equipe, pude auxiliar tecnicamente a equipe. Como eu já havia tido contato com React e Node, pude auxiliar meus colegas com dúvidas técnicas básicas, como conserto de REST e consumo de APIs pelo frontend.`,
      repository: "https://github.com/yokotaerik/API-2024.01",	
    },
    {
      title: "Criança Renal",
      description:
        "API do 1º semestre construída pelo grupo Pixels que consiste em criar um site informativo sobre doença renal crônica infantil com um blog para compartilhar histórias e notícias.\n\nMinhas contribuições:\n- 1ª Sprint: Desenvolvimento do wireframe, com a principal atribuição sendo a Homepage.\n- 2ª Sprint: Levantamento de requisitos do banco de dados, implementação do banco de dados, criação de lógica de login e sessão.\n- 3ª Sprint: Implementação da criação e exibição de posts, tanto em uma página única quanto no blog, colocando dinamicamente o conteúdo do blog. \n- 4ª - Correções de bugs e melhorias no código.",
      stacks: ["Flask - Uso com Auxlio", "MySql - Uso com Auxlio"],
      softSkills: `Utilizando proatividade e trabalho em equipe, eu e o Kauê fomos responsáveis por implementar o back-end, além de também juntos conseguimos superar o desafio de envio de imagens para o blogm, algo que estava muito complexo para nós.\n
      Além disso, sempre que um colega do grupo não conseguia resolver um problema, utilizei da resiliência e positividade para resolver as tarefas que meus colegas não conseguiam por dificuldades técnicas.\n
      Afinal, eles eram iniciantes na programação e eu já tinha uma ligeira bagagem de cursos online, então utilizei disso para conseguir cumprir com os prazos.`,
      repository: "https://github.com/Daiene/Pixels",
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
            <ProjectOnFatecApi
              key={index}
              title={project.title}
              description={project.description}
              stacks={project.stacks}
              repository={project.repository}
              softSkills={project.softSkills}
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
            <ProjectOnFatecApi
              key={index}
              title={project.title}
              description={project.description}
              softSkills={project.softSkills}
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
