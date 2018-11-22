import React, { Component } from "react";
import "./App.css";
import PersonalInformation from "./components/PersonalInformation";
import Header from "./components/Header";
import SkillsAndLocation from "./components/SkillsAndLocation";
import Portfolio from "./components/Portfolio";
import SubmitButton from "./components/SubmitButton";

class App extends Component {
  handleSubmit = () => {};
  render() {
    return (
      <div className="App">
        <Header
          headerTitle="Let's talk"
          pText="Think you have what it takes? Show us."
        />
        <main className="wrapper">
          <form onSubmit={this.handleSubmit}>
            <PersonalInformation />

            <SkillsAndLocation />

            <Portfolio />

            <SubmitButton title="Submit" />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
