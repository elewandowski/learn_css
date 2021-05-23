import React from "react";
import "./Header.css";
import logo from "./assets/logo.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <img className="logo" src={logo}></img>
      </div>
    );
  }
}

export default Header;
