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
    <section className="padding" id="about" style={{ color: "white" }}>
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div
        className="about-section"
        style={{
          color: "white",
          maxWidth: "800px", // Center and limit the text width
          margin: "0 auto", // Center the content horizontally
          padding: "2rem",
          textAlign: "center", // Center align the text
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <h3>Achievements</h3>
        <p className="large">{achievements}</p>
        <hr />
        <p className="about-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;