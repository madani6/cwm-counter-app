import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge badge-pill badge-seconday">{this.props.totalCounters}</span>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
