import React from "react";
import axios from "axios";

const AddNewMaterial = () => {
  const handleAddingMaterial = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://th-light-store-system.onrender.com/matrials/add-new-material",
        formData,
        config
      )
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pageContent">
      <form method="post" onSubmit={handleAddingMaterial}>
        <label>name of material</label>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <br />
        <label>number of material</label>
        <input
          type="number"
          name="numberOfMatrials"
          placeholder="numberOfMatrials"
        />
        <br />
        <br />
        <label>price</label>
        <input type="number" name="price" />
        <br />
        <br />
        <label>description</label>
        <textarea name="description" cols="30" rows="10"></textarea>
        <br />
        <br />
        <button type="submit">add new material</button>
      </form>
    </div>
  );
};

export default AddNewMaterial;
