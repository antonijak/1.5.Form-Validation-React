import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = props => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label" htmlFor={props.id}>
        {props.labelTitle}{" "}
        <input
          className="checkbox-input"
          type="checkbox"
          name={props.name}
          id={props.id}
        />
        <span className="checkmark" />
      </label>
    </div>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  name: PropTypes.string
};
