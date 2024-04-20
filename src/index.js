import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from  "./App";
import HistoryOfMaterials from "./pages/historyOfMaterials";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="/about">About Us</Link>
        <br />
        <Link to="/materials-report">test for materials history</Link>
      </div>
    ),
  },
  {
    path: "/about",
    element: <App/>  ,
  },
  {
    path: "/materials-report",
    element: <HistoryOfMaterials/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);