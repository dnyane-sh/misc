import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
              <h1><a href="/">Home</a></h1>
            </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;