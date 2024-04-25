import React from 'react';
import MaterialsListBox from './components/materialsListBox';
import axios from 'axios';

const AddExistingMaterials = () => {
  const handleAddingMaterial = (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.post('https://th-light-store-system.onrender.com/matrials/add-existing-material',formData , config)
      .then((res)=>{
        alert(res.data.msg);
      })
      .catch((err)=>console.log(err))
  }

  return (
    <form method='post' onSubmit={handleAddingMaterial}>
      <label>name of material</label>
      <MaterialsListBox nameOflistBox='materialsAdded.name'/>
      <br /><br />
      <label>number of material</label>
      <input type="number" name="materialsAdded.numberOfMatrials"  placeholder="numberOfMatrials"/>
      <br /><br />
      <button type="submit">add existing material</button>
    </form>
  );
}

export default AddExistingMaterials;
