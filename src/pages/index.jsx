import { useEffect, useRef } from "react";
import BackendSkills from "@/components/BackendSkills";
import FrontendSkills from "@/components/FrontendSkills";
import HomeCard from "@/components/HomeCard";
import Head from "next/head";

export default function Home() {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);

  useEffect(() => {
    const frontSkillElement = frontendRef.current;
    const backSkillElement = backendRef.current;

    const frontObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          frontSkillElement.classList.add("slide-in-right");
        } else {
          frontSkillElement.classList.remove("slide-in-right");
        }
      });
    });

    const backObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          backSkillElement.classList.add("slide-in-left");
        } else {
          backSkillElement.classList.remove("slide-in-left");
        }
      });
    });

    frontObserver.observe(frontSkillElement);
    backObserver.observe(backSkillElement);

    return () => {
      frontObserver.unobserve(frontSkillElement);
      backObserver.unobserve(backSkillElement);
    };
  }, []);

  return (
    <div className="pt-24 flex items-center justify-evenly gap-20 min-h-screen flex-col">
      <Head>
        <title>Home | Yokota</title>
      </Head>
      <HomeCard />
      <h3 className=" text-8xl font-bold mt-24 text-blue-950 dark:text-white">
        That&apos;s My Way
      </h3>
      <div className="flex flex-col mt-20 gap-24">
        <div ref={frontendRef}>
          <FrontendSkills />
        </div>
        <div ref={backendRef}>
          <BackendSkills />
        </div>
      </div>
    </div>
  );
}
