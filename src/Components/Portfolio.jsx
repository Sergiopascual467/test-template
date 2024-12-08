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
    title: "My First Web",
    description:
      "Collaboration to create a beginner-friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "My Web Development",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/Sergiopascual467/test-template",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub Pages. Includes my experience and design abilities.",
    url: "https://github.com/Sergiopascual467/test-template",
  },
  {
    title: "GitHub Codespaces and GitHub.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
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