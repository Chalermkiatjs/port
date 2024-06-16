import { Outlet } from "react-router-dom";
import Footer from "component/Footer/Footer.js";
import NavWork from "component/NavWork/NavWork.js";
const WorkLayout = () => {
  return (
    <>
      <NavWork />
      <Outlet />
      <Footer />
    </>
  );
};
export default WorkLayout;
