import "../../CSS/nav.css";
import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navbar() {
  // useState responsive navbar
  const [click, setClick] = useState(false);

  return (
    <section>
      <div className="nav-container">
        <div className="logo">
          <LinkScroll
            activeClass="active"
            to="main"
            spy={true}
            style={{ color: "white" }}
          >
            CHALERMKIAT
          </LinkScroll>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <LinkScroll
              activeClass="active"
              to="main"
              spy={true}
              onClick={() => setClick(false)}
            >
              Home
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              onClick={() => setClick(false)}
            >
              About me
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="work"
              spy={true}
              onClick={() => setClick(false)}
            >
              My work
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              onClick={() => setClick(false)}
            >
              Contact
            </LinkScroll>
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
