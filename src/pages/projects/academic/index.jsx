import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectOnFatecApi from "@/components/ProjectOnFatecApi";


// - 1ª Sprint: Modelagem do banco de dados e criação inicial da estrutura do projeto. Fui responsável pela implementação do sistema de autenticação via JWT, tanto na tela quanto no backend, além da integração com o backend para adicionar anexos e criar projetos.\n
// - 2ª Sprint: Fui responsável pela filtragem dos dados dos projetos através de palavras-chave utilizando predicates no repositório Java, além de criar todo o fluxo responsável por filtrar os projetos que estão prestes a vencer e colocá-los em uma tela de alerta. Ademais, também contribuí para a refatoração do frontend.\n
// - 3ª Sprint: Fui responsável por criar os campos sensíveis dos projetos, que o administrador pode ocultar do público geral. Construí todo o fluxo desde o backend ao frontend, além de ajudar a estilizar o frontend e criar um componente para download de arquivos PDF e Excel.\n
// - 4ª Sprint: Em progresso.`,

const AcademicProjectsPage = () => {

  const projetos = [
    {
      title: "FAPG - Portal de transparência",
      description: `API do 3º semestre construída pelo grupo Sync que consiste em um portal de transparência para a fundação FAPG,sendo possível que o administrador publique os projetos realizados pela fundação, gerando a transparência necessária que o órgão demanda.
      Além disso, para fins internos, é possível administrar os bolsistas e relatórios através de dashboards interativas e auditoria das alterações dos projetos. \n
      Minhas contribuições:
      Atuei como desenvolvedor, ajudando na modelagem do banco e planjamento das features antes  da execução para atingir um código com mais qualidade. Inicialmente, reorganizamos a equipe para melhorar a dinâmica, resultando em uma equipe mais organizada e eficiente, mas a entrada de novo integrantes na terceira sprint trouxe dificuldades adicionais, como queda na produtividade e agravamento da comunicação. A elicitação de requisitos ineficiente resultou em trabalho acumulado para a última sprint, forçando a equipe a finalizar funcionalidades às pressas.
      Apesar das dificuldades, aprendi a importância de comunicação, organização e colaboração para alcançar uma equipe ágil e eficiente, além de valorizar times menores e bem alinhados para maior produtividade.`,
      stacks: [
        "Spring Boot - Uso com autonomia e podendo ajudar colegas a aprender",
        "React - Uso com autonomia ",
        "MySql - Uso com autonomia",
      ],
      softSkills: `Através do trabalho em equipe e comunicação, apesar de não atuar diretamente na codificação de algumas features, pude ajudar meus colegas desenhando soluções de como resolver as features.
      Além disso, como a minha equipe acabou recebendo novos integrantes, tentei ajudar os novos integrantes a se integrar no nosso projeto, pois para eles a estrutura era completamente nova. Um bom exemplo foi quando o Claudio tinha uma task de refatorar e reorganizar a estrutura do back-end, sentei junto com ele e expliquei algumas boas práticas e conhecimentos que eu tinha.Ali fomos responsáveis por desenvolver a nova estrutura do back-end para uma melhor arquitetura e escalabilidade do projeto.`,
      repository: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
    },
    {
      title: "Woodpecker - HelpDesk",
      description: `Em 2024-01: API do 2° semestre construída pelo grupo Team H.I.V.E que consiste em criar um sistema de HelpDesk para uma empresa fictícia chamada Woodpecker. No qual existe o gerenciamento de funcionários, definido horários e especialidades, além disso os tickes aberto baseados nos problemas são automaticamente enviados para os respectivos perfis de funcionários, que também são organizados por tempo para conclusão baseados nos SLA que também são editáveis. Além disso conta com um dashboard dos tickeks abertos para auxiliar no entendimento dos problemas mais frequentes. API do 2º semestre construída pelo grupo Team H.I.V.E que consiste em criar um sistema de HelpDesk para uma empresa fictícia chamada Woodpecker.\n
      Minhas contribuições:\n
     A maior dificuldade da equipe besse projeto foi lidar com novas tecnologias, como JavaScript e TypeScript. No início, foi um pouco desafiador, mas, com o tempo, a equipe se adaptou. Além das dificuldades técnicas, enfrentamos um problema significativo de comunicação no início do trabalho. Essa falha na comunicação resultou em um desempenho aquém do esperado na primeira sprint,onde praticamente não conseguimos entregar o MVP.
     No entanto, ao longo do semestre, conseguimos melhorar. Como SM, incentivei a equipe a seguir o processo agil, logo adotamos uma abordagem mais estruturada, discutindo as atividades e definindo claramente as responsabilidades de cada membro da equipe.Com isso, passamos a seguir o framework Scrum de forma mais eficiente. Implementamos dailys, nas quais registrávamos o que cada um havia feito. Com base nessas informações, eu montava o burndown chart para acompanhar o progresso, identificar o que já havia sido concluído e planejar as tarefas restantes.
         Dessa forma, conseguimos entregar o projeto no prazo e com qualidade. Mesmo atuando como Scrum Master, desenvolvi bastante e pude ajudar meus colegas a aprender sobre o react e o express. Pois já havia tido contato
         com essas tecnolokgias em projetos pessoais.`,
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
        `API do 1º semestre construída pelo grupo Pixels que consiste em criar um site informativo sobre doença renal crônica infantil com um blog para compartilhar histórias e notícias
        \nMinhas contribuições:
Neste projeto, atuei como desenvolvedor. O grupo enfrentou muitas dificuldades no geral, pois éramos iniciantes em programação. Além disso, não tínhamos noção de prototipação no Figma, o que tornou o semestre desafiador, mas extremamente enriquecedor.
Aprendi muito, desde o uso do Flask para renderização dinâmica até aspectos básicos de CSS e HTML. Infelizmente, não participei ativamente da estilização do projeto com CSS e HTML, e até hoje sinto que tenho um "débito técnico" em relação ao uso de CSS puro.
Por outro lado, o trabalho no back-end foi uma descoberta marcante para mim. Foi nesse semestre que percebi que essa era minha principal vocação. Desde a modelagem de dados até a lógica necessária para construir aplicações.`,
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
