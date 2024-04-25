import axios from "axios";
import React, { useState } from "react";
import MaterialsListBox from "./components/materialsListBox";
import FinalProductListBox from "./components/finalProductListBox";

const AddExistingFinalProduct = () => {
  const handleAddingFinalProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Format materials used data
    const materialsUsed = [];
    for (let i = 0; i < priceInputs.length; i++) {
      const materialName = formData.get(`namesOfMaterialsUsed[${i}]`);
      const materialNumber = formData.get(`numbersOfMatrialsUsed[${i}]`);
      materialsUsed.push({
        name: materialName,
        numberOfMaterials: materialNumber,
      });
    }

    // Add materialsUsed to formData
    formData.append("matrialsUsed", JSON.stringify(materialsUsed));

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "https://th-light-store-system.onrender.com/finalProducts/add-existing-final-product",
        formData,
        config
      );
      console.log("res.data :>> ", res.data);
      alert(res.data.msg);
    } catch (err) {
      console.log(err);
    }
  };
  const [rowCounter, setRowCounter] = useState(1);
  const [priceInputs, setPriceInputs] = useState([]);
  const addItem = () => {
    setRowCounter(rowCounter + 1);
    setPriceInputs([...priceInputs, ""]);
  };

  const handleDeleteRow = (index) => {
    setPriceInputs(priceInputs.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <form method="post" onSubmit={handleAddingFinalProduct}>
        <FinalProductListBox nameOfListBox={'existingFinalProductAdded.name'} />
        <input
          type="number"
          name="existingFinalProductAdded.numberOfProducts"
          placeholder="number of products"
          style={{ marginRight: "2%" }}
          required
        />
        <button type="submit" className="btn btn-lg btn-success">
          <i className="fa-solid fa-check"></i> save
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">materials used name</th>
              <th scope="col">materials number</th>
              <th scope="col">مسح</th>
            </tr>
          </thead>
          <tbody id="item-table-body">
            {priceInputs.map((input, index) => (
              <tr key={index}>
                <td>
                  <MaterialsListBox nameOflistBox={`existingFinalProductAdded.namesOfMaterialsUsed[${index}]`} />
                </td>
                <td>
                  <input
                    type="number"
                    className="price-input"
                    name={`existingFinalProductAdded.numbersOfMatrialsUsed[${index}]`}
                    required
                    placeholder="number of the materials"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-lg btn-danger"
                    onClick={() => handleDeleteRow(index)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
      <button
        id="add-item-button"
        onClick={addItem}
        className="btn btn-lg btn-info"
      >
        <i className="fa-solid fa-plus"></i>
        add material used to this product
      </button>
    </div>
  );
};

export default AddExistingFinalProduct;
