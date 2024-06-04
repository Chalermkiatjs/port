import CodingPage from "../pages/CodingPage";
import HomePage from "../pages/HomePage";
import MotionPage from "../pages/MotionPage";
import ProductionPage from "../pages/ProductionPage";
import VisualPage from "../pages/VisualPage";

export const Navigations = [
  {
    path: "/",
    element: <HomePage />,
    layout: "MainLayout",
  },
  {
    path: "/production",
    element: <ProductionPage />,
    layout: "WorkLayout",
  },
  {
    path: "/coding",
    element: <CodingPage />,
    layout: "WorkLayout",
  },
  {
    path: "/motion",
    element: <MotionPage />,
    layout: "WorkLayout",
  },
  {
    path: "/visual",
    element: <VisualPage />,
    layout: "WorkLayout",
  },
];
