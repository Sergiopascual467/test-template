import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../images/down-arrow.svg";
import image from "../assets/images/web-background.jpeg";

const imageAltText = "Abstract technological background with interconnected glowing nodes and circuits on a dark blue grid.";
const Home = ({ name, title }) => {
  // Inline styles with explicit image sizing
  const styles = {
    section: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures the image covers the background without distortion
      zIndex: -1,
    },
    content: {
      zIndex: 1,
      color: "#fff",
    },
    scrollIndicator: {
      position: "absolute",
      bottom: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
    },
    arrowImage: {
      height: "2rem",
      width: "2rem",
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