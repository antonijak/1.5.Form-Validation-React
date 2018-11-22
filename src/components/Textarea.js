import React from "react";
import PropTypes from "prop-types";
import "./Textarea.css";

const Textarea = props => {
  return (
    <textarea
      className={props.className}
      placeholder={props.placeholder}
      rows={props.rows}
      cols={props.cols}
    />
  );
};

export default Textarea;

Textarea.propTypes = {
  className: PropTypes.string
};
