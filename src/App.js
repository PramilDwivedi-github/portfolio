import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import Objective from "./components/objective";
import Education from "./components/education";
import Skills from "./components/skill";
import { useState } from "react";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Objective />
      <Education />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
