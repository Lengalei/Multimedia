import React from "react";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="content">
        <h2>The perfect blend of taste, innovation and passion</h2>
        {/* <p>
          Coca-Cola has been spreading moments of happiness and refreshing the
          world for over a century. Experience the perfect blend of taste,
          innovation, and passion that inspires millions every day.
        </p> */}
        <p>
          Join us in celebrating life’s most special moments, one sip at a time.
        </p>
      </div>
      <div className="image-container">
        <img
          src="/coc.jpg"
          alt="Coca-Cola Refreshing Moment"
          className="about-image"
        />
      </div>
    </section>
  );
};

export default AboutSection;
