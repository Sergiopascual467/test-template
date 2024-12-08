/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../assets/images/web-background.jpeg";

const imageAltText = "Abstract technological background with interconnected glowing nodes and circuits on a dark blue grid.";

const description =
  "As a competitive BMX athlete and a first-year Business and Data Analytics student at the University of Navarra, I’ve learned how precision, data, and strategy shape both sports and business success.";

const achievements = `
  3x Top 2 in the Latin American Ranking,
  5x National Champion (BMX),
  5x Regional Champion,
  1x Quarterfinalist in the BMX World Championship 2016.
`;

const quote =
  "Success is the sum of small efforts, repeated day in and day out—just as in BMX, consistency and precision make all the difference in achieving success, whether on the track or in business.";

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
        fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif", // Apple system font
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
        <h3>Quote</h3>
        <p style={{ fontStyle: "italic", fontSize: "1.2rem" }}>{quote}</p>
      </div>
    </section>
  );
};

export default About;