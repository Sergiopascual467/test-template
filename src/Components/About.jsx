/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../assets/images/web-background.jpeg";

const imageAltText = "Abstract technological background with interconnected glowing nodes and circuits on a dark blue grid.";

const description =
  "First-year Business and Data Analytics student at the University of Navarra, passionate about leveraging data to drive business insights.";

const achievements = `
  3x Top 2 in the Latin American Ranking,
  5x National Champion (BMX),
  5x Regional Champion,
  1x Quarterfinalist in the BMX World Championship 2016.
`;

const detailOrQuote = "Turning data into decisions is the future of business success.";

const About = () => {
  return (
    <section
      id="about"
      style={{
        color: "white",
        position: "relative",
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", // Center text alignment
        overflow: "hidden", // Prevent any overflow
      }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={imageAltText}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Send image behind content
        }}
      />
      {/* Content Section */}
      <div
        style={{
          maxWidth: "800px", // Center and limit the width
          padding: "2rem",
        }}
      >
        <h2>About Myself</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{description}</p>
        <hr style={{ margin: "1.5rem 0", borderColor: "rgba(255, 255, 255, 0.5)" }} />
        <h3>Achievements</h3>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>{achievements}</p>
        <hr style={{ margin: "1.5rem 0", borderColor: "rgba(255, 255, 255, 0.5)" }} />
        <p style={{ fontStyle: "italic", fontSize: "1.2rem" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;