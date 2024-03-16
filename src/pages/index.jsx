import { useEffect, useRef } from "react";
import BackendSkills from "@/components/BackendSkills";
import FrontendSkills from "@/components/FrontendSkills";
import HomeCard from "@/components/HomeCard";
import Head from "next/head";

export default function Home() {
  return (
    <div className="pt-24 flex items-center justify-evenly gap-20 min-h-screen flex-col">
      <Head>
        <title>Home | Yokota</title>
      </Head>
      <HomeCard />
      <h3 className=" text-8xl font-bold mt-24 text-blue-950 dark:text-white w-full">
        That&apos;s My Way
      </h3>
      <div className="flex flex-col mt-20 gap-24 w-full">
        <div>
          <FrontendSkills />
        </div>
        <div>
          <BackendSkills />
        </div>
      </div>
    </div>
  );
}
