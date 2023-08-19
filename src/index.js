import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Coding from "./component/Coding";
import Production from "./component/Production";
import Motion from "./component/motion";

// import Home from "./component/Home";
// import Contact from "./component/Contact";
// import Work from "./component/Work";
// import About from "./component/About";
import Visual from "./component/Visual";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
