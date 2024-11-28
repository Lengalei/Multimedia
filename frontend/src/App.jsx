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
import VideoTextSection from "./components/VideoTextSection";
import PodcastsSection from "./components/PodcastsSection";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <VideoTextSection />
      <VideoAdvertising />
      <HappyMoments />
      <PodcastsSection />
      <BrandSection />
      <Footer />
    </>
  );
};

export default App;
