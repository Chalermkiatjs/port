import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./style/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Coding from "./pages/coding/index";
import Production from "./pages/production/index";
import Motion from "./pages/motion/index";
import Visual from "./pages/visual/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "production",
    element: <Production />,
  },
  {
    path: "coding",
    element: <Coding />,
  },
  {
    path: "motion",
    element: <Motion />,
  },
  {
    path: "visual",
    element: <Visual />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
