import Footer from "../component/Footer";
import NavBar from "../component/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
