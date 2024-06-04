import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";

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
