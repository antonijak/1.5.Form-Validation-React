import React from "react";
import PropTypes from "prop-types";
import "./RadioInput.css";

const RadioInput = props => {
  return (
    <li className="radio-container">
      <input type="radio" name={props.name} id={props.id} />
      <label htmlFor={props.id} className="radio-label">
        {props.title}
      </label>
    </li>
  );
};

export default RadioInput;

RadioInput.propTypes = {
  name: PropTypes.string
};
