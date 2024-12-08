import React from "react";
import image from "../assets/images/data-fondo.jpeg";

const imageAltText = "Technological background with interconnected digital nodes and circuits.";

const Portfolio = ({ projects }) => {
  const styles = {
    portfolioHeader: {
      textAlign: "center",
      padding: "2rem 0",
      fontSize: "2rem",
      fontWeight: "bold",
    },
    portfolioContainer: {
      display: "flex",
      flexDirection: "row",
      paddingTop: "3rem",
      gap: "2rem",
    },
    portfolioImage: {
      maxWidth: "40%",
      height: "auto",
      objectFit: "cover",
      alignSelf: "center",
      borderRadius: "8px",
    },
    projectList: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "2rem",
    },
    projectBox: {
      marginBottom: "1.5rem",
    },
    projectTitle: {
      color: "#007acc",
      textDecoration: "none",
      fontSize: "1.25rem",
      fontWeight: "bold",
    },
    projectTitleHover: {
      textDecoration: "underline",
    },
    projectDescription: {
      fontSize: "1rem",
      color: "#333",
      marginTop: "0.5rem",
    },
  };

  return (
    <section className="padding" id="portfolio">
      <h2 style={styles.portfolioHeader}>Portfolio</h2>
      <div style={styles.portfolioContainer}>
        {/* Image Section */}
        <div>
          <img src={image} style={styles.portfolioImage} alt={imageAltText} />
        </div>

        {/* Project List Section */}
        <div style={styles.projectList}>
          {projects.map((project) => (
            <div style={styles.projectBox} key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.projectTitle}
                onMouseOver={(e) => (e.target.style.textDecoration = styles.projectTitleHover.textDecoration)}
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                <h3>{project.title}</h3>
              </a>
              <p style={styles.projectDescription}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Default props to avoid rendering errors if no projects are provided
Portfolio.defaultProps = {
  projects: [],
};

export default Portfolio;