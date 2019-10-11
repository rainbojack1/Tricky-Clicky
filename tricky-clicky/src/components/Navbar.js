import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="navbar-brand mb-0 h1">Tricky Clicky</div>
          <div className="response">
              <span>Correct!</span>
              <span>Wrong!</span>
          </div>
          <div className="score">
              <span>Score: 0 | </span>
              <span>Top Score: 0</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;