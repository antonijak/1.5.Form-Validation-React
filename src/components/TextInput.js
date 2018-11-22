import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

const TextInput = props => {
  return (
    <div className="text-input-container" id={props.id}>
      <input
        className="text-input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;

TextInput.propTypes = {
  name: PropTypes.string
};
