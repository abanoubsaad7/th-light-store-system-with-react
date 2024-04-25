import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from  "./App";
import HistoryOfMaterials from "./pages/historyOfMaterials";
import FormsList from "./pages/formsList";
import AddExistingMaterialsPage from "./pages/addExistingMaterialsPage";
import AddNewMaterialPage from "./pages/addNewMaterialPage";
import AddNewFinalProductPage from "./pages/addNewFinalProductPage";
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
    path:'/forms',
    element: <FormsList/>,
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
    element:<AddNewFinalProductPage/>
  },
  {
    path:'/add-existing-final-product',
    element:<AddExistingFinalProductPage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);