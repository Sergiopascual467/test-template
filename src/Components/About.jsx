/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../assets/images/web-background.jpeg";

const imageAltText = "Abstract technological background with interconnected glowing nodes and circuits on a dark blue grid.";

const description = "First-year Business and Data Analytics student at the University of Navarra, passionate about leveraging data to drive business insights.";

const skillsList = [
  "Web design",
  "User experience",
  "Focus group testing",
  "Mobile user interfaces",
];

const detailOrQuote =
  "Turning data into decisions is the future of business success.";

const About = () => {
  return (
    <section className="padding" id="about" style={{ color: "white" }}>
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-section" style={{ color: "white" }}>
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="about-skills">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="about-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;