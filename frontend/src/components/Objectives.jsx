import React from "react";
import "./Header.scss";

const Objectives = () => {
  const objectives = [
    {
      title: "Multimedia Integration",
      description: "Support video, audio, and graphics.",
    },
    {
      title: "User Engagement",
      description: "Enhance with dynamic, rich content.",
    },
    {
      title: "Resource Optimization",
      description: "Focus on digital marketing assets.",
    },
  ];

  return (
    <section className="objectives" id="objectives">
      <h2>Our Objectives</h2>
      <div className="cards">
        {objectives.map((obj, index) => (
          <div key={index} className="card">
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Objectives;
