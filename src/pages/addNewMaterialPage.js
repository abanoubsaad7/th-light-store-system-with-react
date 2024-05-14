import React from 'react';
import AddNewMaterial from '../components/Forms/addNewMaterial';
import MainNav from '../components/main_and_side_Bar/mainNav';
import SideBar from '../components/main_and_side_Bar/sideBar';

const AddNewMaterialPage = () => {
  return (
    <div>
      <MainNav/>
      <div className="row container">
        <div className="col-lg-3">
          <SideBar/>
        </div>
        <div className="col-lg-8">
        <AddNewMaterial/>
        </div>
      </div>
    </div>
  );
}

export default AddNewMaterialPage;
