import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </>
  );
};
export default Layout;
