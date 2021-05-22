import React from "react";
import "./MainSection.css";

function MainSection() {
  return (
    <main>
      <section className="section1">
        <h1> Welcome to Emil's first website</h1>
        <p>here you'll find all my development work.</p>
      </section>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </main>
  );
}

export default MainSection;
