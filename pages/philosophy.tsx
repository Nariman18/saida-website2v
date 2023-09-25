import React from "react";
import Head from "next/head";
import PhilosophyHeader from "../components/PhilosophyHeader";
import PhilosophyBody from "../components/PhilosophyBody";
import PhilosophyContact from "../components/PhilosophyContact";

function philosophy() {
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

      <PhilosophyHeader />

      <section>
        <PhilosophyBody />
      </section>

      <section className="flex flex-col items-center">
        <PhilosophyContact />
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

export default philosophy;
