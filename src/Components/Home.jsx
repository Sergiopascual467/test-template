import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../images/down-arrow.svg";
import image from "../assets/images/data-fondo.jpeg"; // Corrected import path

const imageAltText = "Technological background with financial charts, data grids, and glowing blue highlights";

const Home = ({ name, title }) => {
  // Inline styles for better readability and maintainability
  const styles = {
    section: {
      position: "relative",
      minHeight: "100vh",
      overflow: "hidden",
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
    },
    content: {
      position: "absolute",
      top: "5rem",
      left: "2rem",
      width: "17rem",
      color: "#fff", // Ensure text color contrasts well with the background
    },
    scrollIndicator: {
      position: "absolute",
      bottom: "3rem",
      left: "50%",
      transform: "translateX(-50%)",
    },
    arrowImage: {
      height: "3rem",
      width: "3rem",
    },
  };

  return (
    <section id="home" style={styles.section}>
      <img className="background" src={image} alt={imageAltText} style={styles.backgroundImage} />
      <div style={styles.content}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
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