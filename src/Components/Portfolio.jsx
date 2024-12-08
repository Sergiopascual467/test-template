/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open-source contributions, articles you've written, and more.
 */

import React from "react";
import image from "../assets/images/web-background.jpeg"; // Ensure the path is correct

const imageAltText = "Abstract technological background with interconnected glowing nodes and circuits on a dark blue grid.";

const projectList = [
  {
    title: "Personal Portfolio",
    description:
      "This is my personal portfolio showcasing my skills, projects, and achievements. Designed to highlight my improvement in javascript.",
    url: "https://your-portfolio-link.com", // Replace with your actual portfolio link
  },
  {
    title: "GitHub Projects",
    description:
      "Explore my GitHub repository featuring various web development and data-driven projects, including unique interfaces and analytics tools.",
    url: "https://github.com/Sergiopascual467", // Replace with your actual GitHub profile link
  },
  {
    title: "University Projects",
    description:
      "A collection of academic projects showcasing my work in Business and Data Analytics, developed during my time at the University of Navarra.",
    url: "https://your-university-projects-link.com", // Replace with your actual university project link
  },
  {
    title: "Web Development Contributions",
    description:
      "Highlights my contributions to open-source projects, including front-end design, back-end logic, and collaborative development.",
    url: "https://your-open-source-link.com", // Replace with your actual open-source contributions link
  },
];

const Portfolio = () => {
  const styles = {
    section: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "white",
      textShadow: "1px 1px 4px rgba(0, 0, 0, 0.9)", // Improved text readability
      padding: "4rem 2rem",
      minHeight: "100vh", // Full viewport height
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: "3rem",
      marginBottom: "3rem",
      textAlign: "center",
    },
    projectList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      textAlign: "center",
      width: "100%",
    },
    projectItem: {
      marginBottom: "2rem",
    },
    projectLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "1.8rem",
      fontWeight: "bold",
      transition: "color 0.3s ease",
    },
    projectDescription: {
      marginTop: "0.5rem",
      fontSize: "1.2rem",
      color: "rgba(255, 255, 255, 0.8)", // Slightly lighter for description
    },
  };

  return (
    <section id="portfolio" style={styles.section}>
      <h2 style={styles.title}>Portfolio</h2>
      <ul style={styles.projectList}>
        {projectList.map((project) => (
          <li key={project.title} style={styles.projectItem}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.projectLink}
              onMouseEnter={(e) => (e.target.style.color = "#00bfff")} // Light blue hover effect
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {project.title}
            </a>
            <p style={styles.projectDescription}>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;