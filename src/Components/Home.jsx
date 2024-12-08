import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../images/down-arrow.svg";
import image from "../assets/images/web-background.jpeg";

const imageAltText = "Abstract technological background with interconnected glowing nodes and circuits on a dark blue grid.";

const Home = ({ name, title }) => {
  const styles = {
    section: {
      position: "relative",
      height: "100vh", // Full viewport height
      width: "100vw", // Full viewport width
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start", // Align content to the left
      textAlign: "left", // Align text to the left
      margin: 0, // Remove default margins
      padding: "2rem", // Add padding to create space from edges
      overflow: "hidden", // Prevent overflow issues
      backgroundImage: `url(${image})`, // Set the image as the background
      backgroundSize: "cover", // Ensure the background image covers the entire section
      backgroundPosition: "center", // Center the background image
      backgroundRepeat: "no-repeat", // Avoid repeating the image
    },
    content: {
      zIndex: 1, // Bring text to the front
      color: "#fff",
    },
    name: {
      fontSize: "4rem", // Increased font size for the name
      marginBottom: "0.5rem",
    },
    title: {
      fontSize: "2.5rem", // Increased font size for the title
    },
    scrollIndicator: {
      position: "absolute",
      bottom: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
    },
    arrowImage: {
      height: "2rem",
      width: "2rem",
    },
  };

  return (
    <section id="home" style={styles.section}>
      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.name}>{name}</h1>
        <h2 style={styles.title}>{title}</h2>
      </div>
      
      {/* Scroll Indicator */}
      <div style={styles.scrollIndicator}>
        <img src={arrowSvg} alt="Scroll down indicator" style={styles.arrowImage} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Your Name",
  title: "Your Career Focus",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;