import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

function App() {
  const headerLinks = [
    {
      text: "ONE",
      href: "https://www.one.com",
    },
    {
      text: "TWO",
      href: "https://www.two.com",
    },
    {
      text: "THREE",
      href: "https://www.three.com",
    },
  ];

  return (
    <div className="App">
      <Header links={headerLinks}> </Header>
      <main>
        <section>
          <h1> Welcome to Emil's first website</h1>
          <p>here you'll find all my development work.</p>
        </section>
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
