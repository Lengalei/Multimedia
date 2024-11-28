import React, { useState, useRef } from "react";
import "./PodcastsSection.scss";
import { FaPlay, FaPause } from "react-icons/fa";

const PodcastsSection = () => {
  const podcasts = [
    {
      title: "Episode 1: The Joy of Refreshment",
      description:
        "Explore how Coca-Cola has been bringing happiness and refreshment to people worldwide for over a century.",
      audio: "/pod.mp3",
      background: "/cocmic.jpg",
    },
    {
      title: "Episode 2: Sustainability and Innovation",
      description:
        "Learn about Coca-Cola's commitment to sustainability and the innovative steps we're taking for a greener future.",
      audio: "/path-to-audio2.mp3",
      background: "/cocmic3.jpg",
    },
    {
      title: "Episode 3: Behind the Brand",
      description:
        "Go behind the scenes and hear from the people who make Coca-Cola the iconic brand it is today.",
      audio: "/path-to-audio3.mp3",
      background: "/cocmic.jpg",
    },
  ];

  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  const togglePlay = (index) => {
    if (playingIndex === index) {
      audioRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex].pause();
      }
      audioRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  const handleTimeUpdate = (index) => {
    const audio = audioRefs.current[index];
    const progressBar = document.getElementById(`progress-bar-${index}`);
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  };

  return (
    <section className="podcasts-section">
      <h2>Coca-Cola Podcasts</h2>
      <p>
        Listen to inspiring stories, brand insights, and the journey of
        Coca-Cola through our podcasts.
      </p>
      <div className="podcast-list">
        {podcasts.map((podcast, index) => (
          <div
            key={index}
            className="podcast-card"
            style={{ backgroundImage: `url(${podcast.background})` }}
          >
            <div className="overlay"></div>
            <div className="podcast-info">
              <h3>{podcast.title}</h3>
              <p>{podcast.description}</p>
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={podcast.audio}
                onTimeUpdate={() => handleTimeUpdate(index)}
              />
              <div className="audio-controls">
                <button
                  className="play-button"
                  onClick={() => togglePlay(index)}
                >
                  {playingIndex === index ? <FaPause /> : <FaPlay />}
                </button>
                <input
                  type="range"
                  id={`progress-bar-${index}`}
                  className="progress-bar"
                  defaultValue="0"
                  step="0.1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastsSection;
