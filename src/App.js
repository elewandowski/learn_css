import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import MainSection from "./MainSection";
import Challenge1 from "./Challenge1";

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
      <Challenge1 />
    </div>
  );
}

export default App;
