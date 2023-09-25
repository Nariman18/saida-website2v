import React from "react";
import Head from "next/head";
import AboutExperienceHeader from "../components/AboutExperienceHeader";
import Image from "next/image";
import ExperienceParagraphs from "../components/ExperienceParagraphs";
import ExperienceContact from "../components/ExperienceContact";

function aboutExperience() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col flex-shrink-0">
      <Head>
        <title>Вход</title>
        <link rel="icon" href="/image 2.png" />
        <meta
          name="description"
          content="Saida Abdullayeva's Portfolio Website..."
        />
      </Head>

      <AboutExperienceHeader />

      <main className="mt-5 flex flex-col items-center">
        <div className="relative 2xl:h-[620px] 2xl:w-[1114px] xl:h-[500px] xl:w-[900px] lg:h-[460px] lg:w-[800px] md:w-[700px] md:h-[420px] sm:h-[380px] sm:w-[650px] 2xl:flex xl:flex lg:flex md:flex sm:flex hidden">
          <Image
            src="/SA.png"
            alt="Banner"
            fill={true}
            className="object-contain"
          />
        </div>

        <div className="relative w-[340px] h-[350px] 2xl:hidden xl:hidden lg:hidden sm:hidden">
          <Image
            src="/SA.png"
            alt="Banner"
            fill={true}
            className="object-cover"
          />
        </div>

        <ExperienceParagraphs />

        <ExperienceContact />

        <button
          onClick={scrollToTop}
          className="text-[#9E9E9E] mb-10 font-Catamaran font-[400] text-[17px] mt-10"
        >
          Go back to start
        </button>
      </main>
    </div>
  );
}

export default aboutExperience;
