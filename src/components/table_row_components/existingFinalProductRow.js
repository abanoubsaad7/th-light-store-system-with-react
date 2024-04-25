import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRowLoader from "../loaders/tableRowLoader";

const ExistingFinalProductRow = ({ reportType, selectedDate }) => {
  const [existingFinalProductRow, setExistingFinalProductRow] = useState([]);
  const [dateOfTheRows , setDateOfTheRows] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://th-light-store-system.onrender.com/all-reports/${reportType}?selectedDate=${selectedDate}`
      )
      .then((response) => {
        const reports = response.data.reportOfExistingProducts;
        const  filteredReportsOfProducts = reports
          .filter((report)=> report.existingFinalProductAdded != null)
          .map((report)=> report.existingFinalProductAdded)
          console.log('filteredReportsOfProducts :>> ', filteredReportsOfProducts);
        const dateReports = reports
          .filter((report)=> report.existingFinalProductAdded != null)
          .map((report)=> report.date)
        console.log('dateReports :>> ', dateReports);
        setExistingFinalProductRow(filteredReportsOfProducts);
        setDateOfTheRows(dateReports)
        setLoading(false);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [selectedDate, reportType]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const existingProductData = () => {
    let rows = [];
    existingFinalProductRow.forEach((item, index) => {
      const materialsUsed = item.materialsUsed;
      const finalProductName = (
        <td rowSpan={item.materialsUsed.length}>{item.nameOfProduct} <sup>old</sup></td>
      );
      materialsUsed.forEach((material, materialIndex) => {
        if (materialIndex === 0) {
          // If it's the first material in the array, set rowspan for the date column
          rows.push(
            <tr key={`${item._id}-${materialIndex}`} className="table-warning">
              <td rowSpan={materialsUsed.length} className="dateReport">
                {formatDate(dateOfTheRows[index])}
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
            <tr key={`${item._id}-${materialIndex}`} className="table-warning">
              <td className="materialName table-warning ">
                {material.nameOfMatrial} <sup>used</sup>{" "}
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

  return <>{existingProductData()}</>;
};

export default ExistingFinalProductRow;
