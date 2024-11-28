import React from "react";
import "./VideoAdvertising.scss";
import advertisingVideos from "./advertisingVideos";

const VideoAdvertising = () => {
  return (
    <section className="video-advertising">
      <h2>Our Creative Video Contents</h2>
      <p>
        Explore our engaging advertising campaigns.
      </p>
      <div className="video-grid">
        {advertisingVideos.map((video) => (
          <div key={video.id} className="video-card">
            <video controls>
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoAdvertising;
