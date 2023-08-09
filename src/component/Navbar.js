import './Nav.css'
import React, { useState } from 'react';
import { HiBars3, HiXMark} from "react-icons/hi2";
function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const closeMenu = ()=> setClick(false);

    return(
        <section>
            <div className="nav-container">
                <div className="logo">Navbar</div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li><a href="Home.js" onClick={closeMenu}>Home</a></li>
                    <li><a href="About.js" onClick={closeMenu}>About me</a></li>
                    <li><a href="Work.js" onClick={closeMenu}>My work</a></li>
                    <li><a href="Contact.js" onClick={closeMenu}>Contact</a></li>
                </ul>
                <div className="menu-bar" onClick={handleClick}>
                    {click ? (
                        <HiXMark />
                    ) : (
                        <HiBars3 />
                    )}
                    
                </div>
                </div>
                
        </section>
        
    );
    
}

export default Navbar