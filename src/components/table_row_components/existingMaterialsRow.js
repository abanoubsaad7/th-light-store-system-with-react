import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRowLoader from "../loaders/tableRowLoader";

const ExistingMaterialsRow = ({ reportType, selectedDate }) => {
  const [existingMaterialsAdded, setExistingMaterialsAdded] = useState([]);
  const [dateOfExistingMaterialsAdded, setDateOfMaterialsAdded] = useState([]);
  const [numberOfExistingMaterialsAdded, setNumberExistingMaterialsAdded] =
    useState(0);
  const [existingMaterialsUsed, setExistingMaterialsUsed] = useState([]);
  const [dateOfMaterialsUsed, setDateOfMaterialsUsed] = useState([]);
  const [numberOfExistingMaterialsUsed, setNumberExistingMaterialsUsed] =
    useState([]);
  const [finalProduct, setfinalProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://th-light-store-system.onrender.com/materialsReport/${reportType}?selectedDate=${selectedDate}`
      )
      .then((response) => {
        const reports = response.data.reportsOfExistingMatrials;

        // Fetch product data for each finalProductID
        const productRequests = reports.map((report) =>
          axios.get(
            `https://th-light-store-system.onrender.com/finalProducts/${report.finalProductID}`
          )
        );

        // Wait for all product requests to complete
        Promise.all(productRequests)
          .then((productResponses) => {
            const products = productResponses.map((res) => res.data);
            // Now you have product data for each report
            console.log("Products:", products);
          })
          .catch((error) => {
            console.error("Error fetching product data:", error);
          });
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

        //============ get existing materials was used ===========================================================
        const materialsUsedArr = reports
          .filter((report) => report.materialsUsed.length > 0)
          .map((report) => report.materialsUsed);
        console.log("materialsUsedArr :>> ", materialsUsedArr);
        const lengthsArray = materialsUsedArr.map((arr) => arr.length); // Map to an array of lengths of each array
        console.log("Lengths Array:", lengthsArray);
        const dateOfMaterialsUsedArr = reports
          .filter((report) => report.materialsUsed.length > 0)
          .map((report) => report.date);
        console.log("dateOfMaterialsUsedArr :>> ", dateOfMaterialsUsedArr);
        setExistingMaterialsUsed(materialsUsedArr);
        setDateOfMaterialsUsed(dateOfMaterialsUsedArr);
        setNumberExistingMaterialsUsed(lengthsArray);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [selectedDate, reportType]);

  const existingMaterialsUsedData = () => {
    let rows = [];
    existingMaterialsUsed.forEach((materials, index) => {
      // Create rows for each material in the array
      materials.forEach((material, materialIndex) => {
        if (materialIndex === 0) {
          // If it's the first material in the array, set rowspan for the date column
          rows.push(
            <tr key={index} className="table-warning">
              <td rowSpan={numberOfExistingMaterialsUsed[index]}>
                {dateOfMaterialsUsed[index]}
              </td>
              <td className="materialName">
                {material.name} <sup>old</sup>{" "}
              </td>
              <td>- {material.numberOfMatrials}</td>
            </tr>
          );
        } else {
          // For subsequent materials in the array, don't repeat the date
          rows.push(
            <tr key={`${index}-${materialIndex}`} className="table-warning">
              <td className="materialName">
                {material.name} <sup>old</sup>
              </td>
              <td>- {material.numberOfMatrials}</td>
            </tr>
          );
        }
      });
    });
    return rows;
  };

  if (loading) {
    return <TableRowLoader/>
  }

  const existingMaterialsAddedData = () => {
    return existingMaterialsAdded.map((material, index) => (
      <tr key={index}>
        <td>{dateOfExistingMaterialsAdded[index]}</td>
        <td>{material.name}</td>
        <td>+ {material.numberOfMatrials}</td>
      </tr>
    ));
  };

  return (
    <>
      {existingMaterialsUsedData()}
      {existingMaterialsAddedData()}
    </>
  );
};

export default ExistingMaterialsRow;
