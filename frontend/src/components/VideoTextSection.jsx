import React from "react";
import "./VideoTextSection.scss";

const VideoTextSection = () => {
  return (
    <section className="video-text-section">
      <div className="video-container">
        <video src="/cocvid.mp4" autoPlay muted loop playsInline />
      </div>
      <div className="text-content">
        <h2>Experience the Joy</h2>
        <p>
          Coca-Cola brings you moments of refreshment, joy, and celebration.
          Dive into a world of happiness with every sip.
        </p>
        <button className="btn">Discover More</button>
      </div>
    </section>
  );
};

export default VideoTextSection;
