import React from "react";

import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <h1>Algo Trading</h1>
      </div>
      <div className="nav__links">
        <ul>
          <li>
           <a href="/">Home</a>
          </li>
          <li>
              <a href="/trade">Trade</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
