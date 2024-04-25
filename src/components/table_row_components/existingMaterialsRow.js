import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRowLoader from "../loaders/tableRowLoader";

const ExistingMaterialsRow = ({ reportType, selectedDate }) => {
  const [existingMaterialsAdded, setExistingMaterialsAdded] = useState([]);
  const [dateOfExistingMaterialsAdded, setDateOfMaterialsAdded] = useState([]);
  const [numberOfExistingMaterialsAdded, setNumberExistingMaterialsAdded] =
    useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://th-light-store-system.onrender.com/all-reports/${reportType}?selectedDate=${selectedDate}`
      )
      .then((response) => {
        const reports = response.data.reportsOfExistingMaterials;
        //============ get existing materials was added ===========================================================
        const materialsAddedArr = reports
          .filter((report) => report.materialsAdded !== null) // Filter out reports where materialsAdded is null
          .map((report) => report.materialsAdded); // Map to an array of materialsAdded objects
        console.log("materialsAddedArr :>> ", materialsAddedArr);
        console.log("materialsAddedArr.length :>> ", materialsAddedArr.length);
        const dateOfMaterialsAddedArr = reports
          .filter((report) => report.materialsAdded !== null)
          .map((report) => report.date);
        console.log("dateOfMaterialsAddedArr :>> ", dateOfMaterialsAddedArr);
        setExistingMaterialsAdded(materialsAddedArr);
        setDateOfMaterialsAdded(dateOfMaterialsAddedArr);
        setNumberExistingMaterialsAdded(materialsAddedArr.length);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [selectedDate, reportType]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };



  const existingMaterialsAddedData = () => {
    return existingMaterialsAdded.map((material, index) => (
      <tr key={index}>
        <td className="dateReport">{formatDate(dateOfExistingMaterialsAdded[index])}</td>
        <td>{material.name}</td>
        <td>
          +<span>{material.numberOfMatrials}</span>
        </td>
        <td>
          0
        </td>
        <td>no product added</td>
        <td>0</td>
        <td>0</td>
      </tr>
    ));
  };

  if (loading) {
    return <TableRowLoader/>
  }

  return (
    <>
      {existingMaterialsAddedData()}
    </>
  );
};

export default ExistingMaterialsRow;
