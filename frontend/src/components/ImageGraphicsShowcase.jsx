import React from "react";
import "./ImageGraphicsShowcase.scss";
import advertisingGraphics from "./advertisingGraphics";

const ImageGraphicsShowcase = () => {
  return (
    <section className="image-graphics-showcase">
      <h2>Images and Graphics Showcase</h2>
      <p>
        Discover our visually compelling advertising materials, including images
        and interactive graphics.
      </p>
      <div className="graphics-grid">
        {advertisingGraphics.map((graphic) => (
          <div key={graphic.id} className="graphic-card">
            <img src={graphic.imageUrl} alt={graphic.title} />
            <h3>{graphic.title}</h3>
            <p>{graphic.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGraphicsShowcase;
