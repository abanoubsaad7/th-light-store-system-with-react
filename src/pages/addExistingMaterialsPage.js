import React from "react";
import AddExistingMaterials from "../components/Forms/addExistingMaterials";
import MainNav from "../components/main_and_side_Bar/mainNav";
import SideBar from "../components/main_and_side_Bar/sideBar";
const AddExistingMaterialsPage = () => {
  return (
    <>
      <div>
        <MainNav />
        <div className="row container">
          <div className="col-lg-3">
            <SideBar />
          </div>
          <div className="col-lg-8">
            <AddExistingMaterials />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AddExistingMaterialsPage;
