import React from 'react';
import AddExistingFinalProduct from '../components/Forms/addExistingFinalProduct';
import MainNav from '../components/main_and_side_Bar/mainNav';
import SideBar from '../components/main_and_side_Bar/sideBar';

const AddExistingFinalProductPage = () => {
  return (
    <div>
      <MainNav/>
      <div className="row container">
        <div className="col-3">
          <SideBar/>
        </div>
        <div className="col-8">
          <AddExistingFinalProduct/>
        </div>
      </div>
    </div>
  );
}

export default AddExistingFinalProductPage;
