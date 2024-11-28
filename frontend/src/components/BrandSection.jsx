import React from "react";
import "./BrandSection.scss";

const BrandSection = () => {
  const brands = [
    { name: "", logo: "/brand1.svg" },
    { name: "", logo: "/brand2.webp" },
    { name: "", logo: "/brand3.svg" },
    { name: "", logo: "/brand4.svg" },
    { name: "", logo: "/brand5.svg" },
  ];

  return (
    <section className="brand-section">
      <h2>Our Brands</h2>
      <p>
        Explore the diverse family of Coca-Cola brands that refresh the world
        every day.
      </p>
      <div className="brand-logos">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.logo} alt={`${brand.name} Logo`} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
