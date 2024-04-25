import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRowLoader from "../loaders/tableRowLoader";

const NewMaterialsRow = ({ reportType, selectedDate }) => {
  const [newMaterialsRow, setNewMaterialsRow] = useState([]);
  const [numberOfNewMaterials, setNunmberOfNewMaterials] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://th-light-store-system.onrender.com/all-reports/${reportType}?selectedDate=${selectedDate}`
      )
      .then((response) => {
        console.log("response :>> ", response.data.reportsOfMatrials);
        setNewMaterialsRow(response.data.reportsOfMatrials);
        setNunmberOfNewMaterials(response.data.numberOfReportsOfNewMatrials);
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

  const newMaterialsData = () => {
    return newMaterialsRow.map((item) => (
      <tr key={item._id} className="table-success">
        <td className="dateReport">{formatDate(item.createdAt)}</td>
        <td className="materialName">
          {item.name} <sup>new</sup>{" "}
        </td>
        <td>
          +<span>{item.numberOfMatrials}</span>
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

  return <>{newMaterialsData()}</>;
};

export default NewMaterialsRow;
