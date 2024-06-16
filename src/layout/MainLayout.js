import { Outlet } from "react-router-dom";
import Footer from "component/Footer/Footer.js";
import NavBar from "component/NavBar/NavBar.js";
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
