/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../assets/images/data-fondo.jpeg";

const imageAltText = "Technological background with financial charts, data grids, and glowing blue highlights.";

const description = "I'm a student studying Business and Data Analytics at University of Navarra. I enjoy creating unique and simplistic user interfaces in creative ways.";

const skillsList = [
  "Web design",
  "User experience",
  "Focus group testing",
  "Mobile user interfaces",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience, I continually look for new and better ways to make tech accessible to all.";

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