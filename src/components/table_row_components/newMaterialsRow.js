import React, { useEffect, useState } from "react";
import axios from "axios";
import TableRowLoader from "../loaders/tableRowLoader";

const NewMaterialsRow = ({ reportType, selectedDate }) => {
  const [newMaterialsRow, setNewMaterialsRow] = useState([]);
  const [numberOfNewMaterials, setNunmberOfNewMaterials] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://th-light-store-system.onrender.com/materialsReport/${reportType}?selectedDate=${selectedDate}`
      )
      .then((response) => {
        console.log("response :>> ", response.data.reportsOfNewMatrials);
        setNewMaterialsRow(response.data.reportsOfNewMatrials);
        setNunmberOfNewMaterials(response.data.numberOfReportsOfNewMatrials);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, [selectedDate, reportType]);
  const newMaterialsData = () => {
    return newMaterialsRow.map((item) => (
      <tr key={item._id} className="table-success">
        <td>{item.createdAt}</td>
        <td className="materialName">
          {item.name} <sup>new</sup>{" "}
        </td>
        <td>no product added</td>
        <td>
          +<span>{item.numberOfMatrials}</span>
        </td>
        <td>
          - <span>0</span>
        </td>
        <td></td>
      </tr>
    ));
  };

  if (loading) {
    return <TableRowLoader/>
  }

  return <>{newMaterialsData()}</>;
};

export default NewMaterialsRow;
