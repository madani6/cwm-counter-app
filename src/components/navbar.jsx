import React, { Component } from "react";


const NavBar = ({totalCounters}) => {
    return (
        <div>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Navbar
              <span className="badge badge-pill badge-seconday">
                {totalCounters}
              </span>
            </a>
          </nav>
        </div>
      );
}

export default NavBar;
