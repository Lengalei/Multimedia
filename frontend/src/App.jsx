import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Objectives from "./components/Objectives";
import Footer from "./components/Footer";
import VideoAdvertising from "./components/VideoAdvertising";
import ImageGraphicsShowcase from "./components/ImageGraphicsShowcase";
import AboutSection from "./components/AboutSection";
import BrandSection from "./components/BrandSection";
import HappyMoments from "./components/HappyMoments";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <VideoAdvertising />
      <HappyMoments />
      {/* <ImageGraphicsShowcase /> */}
      <BrandSection />
      <Footer />
    </>
  );
};

export default App;
