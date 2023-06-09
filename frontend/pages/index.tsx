import type { NextPage } from "next";
import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/Organism/Navbar";
import MainBanner from "../components/Organism/MainBanner";
import Featured from "../components/Organism/Feature";
import TransactionStep from "../components/Organism/TransactionStep";
import Reach from "../components/Organism/Reach";
import StorySection from "../components/Organism/StorySection";
import Footer from "../components/Organism/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <Featured />
      <Reach />
      <StorySection />
      <Footer />
    </>
  );
};

export default Home;
