import "./App.css";
import Header from "./components/Header/Header";

import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Challenge1 from "./components/Challenge1/Challenge1";
import Challenge2 from "./components/Challenge2/Challenge2";
import Challenge3 from "./components/Challenge3/Challenge3";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/* <h1>Simple SPA</h1> */}
          <ul className="header">
            <li>
              <NavLink to="/challenge1">Challenge1</NavLink>
            </li>
            <li>
              <NavLink to="/challenge2">Challenge2</NavLink>
            </li>
            <li>
              <NavLink to="/challenge3">Challenge3</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route path="/challenge1" component={Challenge1} />
            <Route path="/challenge2" component={Challenge2} />
            <Route path="/challenge3" component={Challenge3} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
