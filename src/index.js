import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from  "./App";
import HistoryOfMaterials from "./pages/historyOfMaterials";
import FormsList from "./pages/formsList";
import AddNewFinalProduct from "./components/Forms/addNewFinalProduct";
import AddNewMaterial from "./components/Forms/addNewMaterial";
import AddExistingMaterials from "./components/Forms/addExistingMaterials";
import AddExistingFinalProduct from "./components/Forms/addExistingFinalProduct";

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
    element: <AddExistingMaterials/>,
  },
  {
    path:'/add-new-material',
    element: <AddNewMaterial/>,
  },
  {
    path:'/add-new-final-product',
    element:<AddNewFinalProduct/>
  },
  {
    path:'/add-existing-final-product',
    element:<AddExistingFinalProduct/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);