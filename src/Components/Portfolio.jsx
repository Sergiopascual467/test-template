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
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "4rem 2rem",
        color: "white",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
      }}
      id="portfolio"
      aria-label={imageAltText} // Added for screen readers
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>
        Portfolio
      </h2>

      {/* Project List Section */}
      <div
        style={{
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Improved contrast
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Added subtle shadow
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
              transition: "transform 0.2s, box-shadow 0.2s", // Smooth hover effect
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#333",
                display: "block",
                transition: "color 0.2s", // Smooth color transition
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")} // Hover color
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.25rem" }}>{project.title}</h3>
            </a>
            <p style={{ fontSize: "1rem", color: "#555", marginBottom: "0" }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;