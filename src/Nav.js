import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="app__nav">
      <nav className="nav__container">
        <div className="nav__logo">
          <img
            src="https://www.sureify.com/wp-content/uploads/2021/03/Inline-Classic.png"
            alt=""
          />
        </div>
        <div className="nav__links__container">
          <ul className="nav__links">
            <a href="#">
              <li>DashBoard</li>
            </a>
            <li>Project</li>
            <li>Events</li>
            <li>Account</li>
            <a href="/employee">
              <li>Employees</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
