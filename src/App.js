import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigations } from "./config/Navigations";
import MainLayout from "./layout/MainLayout";
import WorkLayout from "./layout/WorkLayout";
function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <Routes>
        {Navigations.map((navigation, index) =>
          navigation.layout === "MainLayout" ? (
            <Route key={index} element={<MainLayout />}>
              <Route path={navigation.path} element={navigation.element} />
            </Route>
          ) : (
            <Route key={index} element={<WorkLayout />}>
              <Route path={navigation.path} element={navigation.element} />
            </Route>
          )
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
