import React from "react";
import Head from "next/head";
import BannerContact from "../components/BannerContact";
import HeaderContact from "../components/HeaderContact";
import Contact from "../components/Contact";

function contact() {
  return (
    <div>
      <Head>
        <title>Вход</title>
        <link rel="icon" href="/image 2.png" />
        <meta
          name="description"
          content="Saida Abdullayeva's Portfolio Website..."
        />
      </Head>

      <BannerContact />

      <main className="flex flex-col items-center">
        <HeaderContact />

        <Contact />
      </main>
    </div>
  );
}

export default contact;
