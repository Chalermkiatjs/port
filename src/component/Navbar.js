import './Nav.css'

function Navbar() {
    return(
        <section>
            <div className="nav-container">
                <div className="logo">Navbar</div>
                <div className="nav-menu">
                <ul>
                    <li><a href="Home.js">Home</a></li>
                    <li><a href="About.js">About me</a></li>
                    <li><a href="Work.js">My work</a></li>
                    <li><a href="Contact.js">Contact</a></li>
                </ul>
                </div>
            </div>
        </section>
    );
}

export default Navbar