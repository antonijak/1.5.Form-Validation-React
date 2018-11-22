import React from "react";
import PropTypes from "prop-types";
import RadioInput from "./RadioInput";
import Checkbox from "./Checkbox";
import "./SkillsAndLocation.css";

const SkillsAndLocation = props => {
  return (
    <section className="section" id="skillsAndLocation">
      <h2 className="section-title">2. Skills and location</h2>
      <div className="sl-question-container" id="primary-design-discipline">
        <h3 className="sl-question">
          Which is your primary design discipline?*
        </h3>
        <RadioInput
          name="main-skills"
          id="design-research"
          title="Design Research"
        />
        <RadioInput
          name="main-skills"
          id="visual-design"
          title="Visual Design"
        />
        <RadioInput name="main-skills" id="ux-design" title="UX Design" />

        <RadioInput
          name="main-skills"
          id="front-end-dev"
          title="Front-end Dev"
        />
      </div>
      <div className="sl-question-container" id="other-disciplines">
        <h3 className="sl-question">
          Do you have experience with any other disciplines?
        </h3>
        <Checkbox labelTitle="Visual Design" id="other-visual-design" />
        <Checkbox labelTitle="UX Design" id="other-ux-design" />
        <Checkbox
          labelTitle="Front-end Developement"
          id="other-frontend-design"
        />
      </div>
      <div className="sl-question-container" id="location">
        <h3 className="sl-question">Where are you interested in working?*</h3>
        <Checkbox labelTitle="Austin, Texas" id="austin" />
        <Checkbox labelTitle="New York, New York" id="newyork" />
        <Checkbox labelTitle="Toronto, Canada" id="toronto" />
        <Checkbox labelTitle="Shanghai, China" id="toronto" />
      </div>
    </section>
  );
};

export default SkillsAndLocation;

SkillsAndLocation.propTypes = {
  sectionTitle: PropTypes.string
};
