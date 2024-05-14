import React from 'react';
import AddNewFinalProduct from '../components/Forms/addNewFinalProduct';
import MainNav from '../components/main_and_side_Bar/mainNav';
import SideBar from '../components/main_and_side_Bar/sideBar';
const AddNewFinalProductPage = () => {
  return (
    <div>
      <MainNav/>
      <div className="row container">
        <div className="col-lg-3">
          <SideBar/>
        </div>
        <div className="col-lg-8">
        <AddNewFinalProduct/>
        </div>
      </div>
    </div>
  );
}

export default AddNewFinalProductPage;
