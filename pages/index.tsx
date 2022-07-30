import type { NextPage } from "next";
import Head from "next/head";
import {
  Featured,
  Footer,
  Guides,
  Header,
  Mobile,
  Ratings,
  Stats,
} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Besnik.</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <Ratings />

      <Guides />

      <Featured />

      <Stats />

      <Mobile />

      <Footer />
    </>
  );
};

export default Home;
