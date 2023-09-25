import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="2xl:bg-white xl:bg-white lg:bg-white md:bg-white">
      <Head>
        <title>Saida Website</title>
        <link rel="icon" href="/image 2.png" />
        <meta
          name="description"
          content="Saida Abdullayeva's Portfolio Website..."
        />
      </Head>

      <Banner />

      <Header />
    </div>
  );
};

export default Home;
