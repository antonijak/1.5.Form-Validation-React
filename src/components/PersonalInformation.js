import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import "./PersonalInformation.css";

const PersonalInformation = props => {
  return (
    <section className="section" id="personal-information">
      <h2 className="section-title">1. Personal information</h2>
      <TextInput
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Full Name*"
      />
      <TextInput type="tel" name="phone" id="phone" placeholder="Phone*" />
      <TextInput type="email" name="email" id="email" placeholder="Email*" />
      <TextInput
        type="email"
        name="re-email"
        id="re-email"
        labelTitle="Re-enter email*"
      />
      <TextInput type="text" name="adress" id="adress" placeholder="Adress*" />
      <TextInput type="text" name="city" id="city" placeholder="City*" />
      <TextInput type="text" name="state" id="state" placeholder="State" />
      <TextInput
        type="text"
        name="region"
        id="region"
        placeholder="Country/Region*"
      />
      <TextInput
        type="text"
        name="zip"
        id="zip"
        placeholder="Zip/Postal code"
      />
      <TextInput
        type="text"
        name="how"
        id="how"
        placeholder="How did you hear about us"
      />
    </section>
  );
};

export default PersonalInformation;

PersonalInformation.propTypes = {
  sectionTitle: PropTypes.string
};
