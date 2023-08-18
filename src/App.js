import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
