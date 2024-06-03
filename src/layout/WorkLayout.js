import Footer from "../component/Footer";
import NavWork from "../component/NavWork";

const WorkLayout = ({ children }) => {
  return (
    <>
      <NavWork />
      {children}
      <Footer />
    </>
  );
};
export default WorkLayout;
