import React from "react";
import "./HappyMoments.scss";

const HappyMoments = () => {
  const moments = [
    { image: "/coc.jpg", caption: "Sharing Happiness" },
    { image: "/coc2.jpg", caption: "Celebrating Togetherness" },
    { image: "/coc3.jpg", caption: "Refreshing Connections" },
    { image: "/coc4.jpg", caption: "Unforgettable Memories" },
    { image: "/coc5.jpg", caption: "Joy in Every Sip" },
    { image: "/coc.jpg", caption: "Laughter and Love" },
  ];

  return (
    <section className="happy-moments">
      <h2>Happy Moments with Coca-Cola</h2>
      <p>Relive the magical moments that Coca-Cola brings to life!</p>
      <div className="gallery">
        {moments.map((moment, index) => (
          <div key={index} className="photo-card">
            <img src={moment.image} alt={moment.caption} />
            <div className="overlay">
              <h3>{moment.caption}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyMoments;
