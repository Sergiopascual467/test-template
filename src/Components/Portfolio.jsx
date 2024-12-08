/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open-source contributions, articles you've written, and more.
 */

import React from "react";
import image from "../assets/images/data-fondo.jpeg";

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
        padding: "2rem",
        textAlign: "center",
      }}
      id="portfolio"
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Portfolio</h2>

      {/* Image Section */}
      <div
        style={{
          marginBottom: "2rem",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={image}
          alt={imageAltText}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Project List Section */}
      <div
        style={{
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {projectList.map((project) => (
          <div
            key={project.title}
            style={{
              backgroundColor: "#f9f9f9",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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