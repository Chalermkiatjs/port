import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Work from "./pages/work";

function App() {
  return (
    <>
      <Layout>
        <Home/>
        <Profile/>
        <Work/>
      </Layout>
    </>
  );
}

export default App;
