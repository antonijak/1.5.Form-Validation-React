import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import "./Portfolio.css";

const Portfolio = props => {
  const title =
    "Prove you're IBM's next great designer by showing us who you are. What you've done. How you thionk. Tell us your story.";
  return (
    <section className="section">
      <h2 className="section-title"> 3. Portfolio</h2>
      <h3 className="sl-question">{title}</h3>
      <TextInput type="text" name="portfolio" placeholder="Portfolio link*" />
      <textarea
        className="portfolio-textarea"
        placeholder="Anything else (another link, availability, etc.)?"
        rows="10"
        cols="163"
      />
    </section>
  );
};

export default Portfolio;

Portfolio.propTypes = {
  sectionTitle: PropTypes.string
};
