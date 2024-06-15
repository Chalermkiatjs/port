import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import NavWork from "../component/NavWork";
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
