import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/cocacola.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Welcome to Coca-Cola E-Marketing Hub!</h1>
        <p>
          Refresh the world and inspire moments of happiness through impactful
          marketing campaigns.
        </p>
        <div className="advertising-words">
          <h2>"Taste the Feeling"</h2>
          <h3>Innovate, Inspire, Refresh.</h3>
        </div>
        <div className="buttons">
          <button className="btn primary">Learn More</button>
          <button className="btn secondary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
