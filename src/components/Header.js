import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = props => {
  return (
    <header className="form-header">
      <h1 className="header-main-title">{props.headerTitle}</h1>
      <p className="header-text">{props.pText}</p>
    </header>
  );
};

export default Header;

Header.propTypes = {
  headerTitle: PropTypes.string,
  pText: PropTypes.string
};
