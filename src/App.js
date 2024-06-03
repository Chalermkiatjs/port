import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Work from "./pages/work";

function App(props) {
  console.log(props);
  return (
    <>
      <Layout>
        <Home />
        <Profile />
        <Work />
      </Layout>
    </>
  );
}

export default App;
