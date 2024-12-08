/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open-source contributions, articles you've written, and more.
 */

import React from "react";
import image from "../assets/images/data-fondo.jpeg"; // Ensure the path is correct

const imageAltText = "Technological background with interconnected digital nodes and circuits.";

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
  return (
    <section
      style={{
        backgroundImage: `url(${image})`, // Set the background image
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent tiling
        padding: "4rem 2rem", // Add some padding for content
        color: "white", // Set text color to white for contrast
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Add text shadow for readability
      }}
      id="portfolio"
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Portfolio</h2>

      {/* Project List Section */}
      <div
        style={{
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Add a semi-transparent background for contrast
          padding: "1.5rem",
          borderRadius: "8px",
        }}
      >
        {projectList.map((project) => (
          <div
            key={project.title}
            style={{
              backgroundColor: "#fff",
              color: "#333",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              marginBottom: "1rem",
              textAlign: "left",
            }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#333",
              }}
            >
              <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.25rem" }}>{project.title}</h3>
            </a>
            <p style={{ fontSize: "1rem", color: "#555" }}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;