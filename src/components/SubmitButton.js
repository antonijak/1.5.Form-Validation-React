import React from "react";
import "./SubmitButton.css";

const SubmitButton = props => {
  return <button className="submit-button">{props.title}</button>;
};

export default SubmitButton;
