import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from  "./App";
import HistoryOfMaterials from "./pages/historyOfMaterials";
import AddNewFinalProductPage from './pages/addNewFinalProductPage'
import AddNewMaterialPage from './pages/addNewMaterialPage'
import AddExistingMaterialsPage from "./pages/addExistingMaterialsPage";
import AddExistingFinalProductPage from "./pages/addExistingFinalProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>  ,
  },
  {
    path: "/all-report",
    element: <HistoryOfMaterials/>
  },
  {
    path: '/add-existing-material',
    element: <AddExistingMaterialsPage/>,
  },
  {
    path:'/add-new-material',
    element: <AddNewMaterialPage/>,
  },
  {
    path:'/add-new-final-product',
    element: <AddNewFinalProductPage/>
  },
  {
    path:'/add-existing-final-product',
    element:<AddExistingFinalProductPage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);