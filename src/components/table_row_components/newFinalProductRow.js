import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRowLoader from "../loaders/tableRowLoader";

const NewFinalProductRow = ({ reportType, selectedDate }) => {
  const [newFinalProductRow, setNewFinalProductRow] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://th-light-store-system.onrender.com/all-reports/${reportType}?selectedDate=${selectedDate}`
      )
      .then((response) => {
        console.log("response :>> ", response.data.reportsOfMatrials);
        setNewFinalProductRow(response.data.reportsOfProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [selectedDate, reportType]);
  console.log('newFinalProductRow :>> ', newFinalProductRow);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const newProductData = () => {
    let rows = [];
    newFinalProductRow.forEach((item, index) => {
      const materialsUsed = item.matrialsUsed;
      const finalProductName = (
        <td rowSpan={item.matrialsUsed.length}>{item.name} <sup>new</sup></td>
      );
      materialsUsed.forEach((material, materialIndex) => {
        if (materialIndex === 0) {
          // If it's the first material in the array, set rowspan for the date column
          rows.push(
            <tr key={`${item._id}-${materialIndex}`} className="table-success">
              <td rowSpan={materialsUsed.length} className="dateReport">
                {formatDate(item.createdAt)}
              </td>
              <td className="materialName table-warning">
                {material.nameOfMatrial} <sup>used</sup>{" "}
              </td>
              <td className="table-warning">0</td>
              <td className="table-warning">- {material.numberOfMatrials}</td>
              {finalProductName}
              <td rowSpan={materialsUsed.length}>{item.numberOfProducts}</td>
              <td rowSpan={materialsUsed.length}>0</td>
            </tr>
          );
        } else {
          // For subsequent materials in the array, don't repeat the date
          rows.push(
            <tr key={`${item._id}-${materialIndex}`} className="table-success">
              <td className="materialName table-warning ">
                {material.nameOfMatrial} <sup>used</sup>
              </td>
              <td className="table-warning">0</td>
              <td className="table-warning">- {material.numberOfMatrials}</td>
            </tr>
          );
        }
      });
    });
    return rows;
  };
  

  if (loading) {
    return <TableRowLoader />;
  }

  return <>{newProductData()}</>;
};

export default NewFinalProductRow;
