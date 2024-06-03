import Footer from "../component/Footer";
import NavBar from "../component/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
