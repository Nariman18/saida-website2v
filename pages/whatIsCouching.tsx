import React from "react";
import Head from "next/head";
import WhatCoachingHeader from "../components/WhatCoachingHeader";
import WhatCoachingParagraph from "../components/WhatCoachingParagraph";
import WhatCoachingContact from "../components/WhatCoachingContact";
import Image from "next/image";

function whatIsCouching() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <Head>
        <title>Вход</title>
        <link rel="icon" href="/image 2.png" />
      </Head>

      <WhatCoachingHeader />

      <main className="mt-5 flex flex-col items-center">
        <div className="relative 2xl:h-[620px] 2xl:w-[1114px] xl:h-[500px] xl:w-[900px] lg:h-[460px] lg:w-[800px] md:w-[700px] md:h-[420px] sm:h-[380px] sm:w-[650px] w-[330px] h-[200px]">
          <Image
            src="/BrainPic.png"
            alt="Banner"
            fill={true}
            className="object-contain"
          />
        </div>
      </main>

      <WhatCoachingParagraph />

      <section className="flex flex-col items-center">
        <WhatCoachingContact />

        <button
          onClick={scrollToTop}
          className="text-[#9E9E9E] mb-10 font-Catamaran font-[400] text-[17px] mt-10"
        >
          Go back to start
        </button>
      </section>
    </div>
  );
}

export default whatIsCouching;
