import "../../style/nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";

function NavWork() {
  const [click, setClick] = useState(false);

  return (
    <section>
      <div className="nav-container">
        <div className="logo">
          <Link to="/" style={{ color: "white" }}>
            CHALERMKIAT
          </Link>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              to="/"
              onClick={() => setClick(false)}
              style={{ color: "white" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/coding"
              onClick={() => setClick(false)}
              style={{ color: "white" }}
            >
              Coding
            </Link>
          </li>
          <li>
            <Link
              to="/production"
              onClick={() => setClick(false)}
              style={{ color: "white" }}
            >
              Production
            </Link>
          </li>
          <li>
            <Link
              to="/motion"
              onClick={() => setClick(false)}
              style={{ color: "white" }}
            >
              Motion Graphics
            </Link>
          </li>
          <li>
            <Link
              to="/visual"
              onClick={() => setClick(false)}
              style={{ color: "white" }}
            >
              Visual Effects
            </Link>
          </li>
        </ul>
        <div className="menu-bar" onClick={() => setClick(!click)}>
          {click ? <HiXMark /> : <HiBars3 />}
        </div>
      </div>
    </section>
  );
}

export default NavWork;
