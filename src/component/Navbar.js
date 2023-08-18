import "./Nav.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navbar() {
  // useState responsive navbar
  const [click, setClick] = useState(false);

  return (
    <section>
      <div className="nav-container">
        <div className="logo">
          <Link
            activeClass="active"
            to="main"
            spy={true}
            style={{ color: "white" }}
          >
            CHALERMKIAT
          </Link>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              activeClass="active"
              to="main"
              spy={true}
              onClick={() => setClick(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              onClick={() => setClick(false)}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              onClick={() => setClick(false)}
            >
              My work
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              onClick={() => setClick(false)}
            >
              Contact
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

export default Navbar;
