import React , {useState} from "react";
import NewMaterialsRow from "../components/table_row_components/newMaterialsRow";
import ExistingMaterialsRow from "../components/table_row_components/existingMaterialsRow";
const HistoryOfMaterials = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to store selected date
  const [reportType, setReportType] = useState("daily"); // State to store selected report type

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Update selectedDate state when date changes
  };

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value); // Update reportType state when report type changes
  };
  return (
    <div className="container">
      <div className="materialFilter">
        <input type="date" name="selectedDate" id="selectedDate" onChange={handleDateChange} />
        <br />
        <br />
        <select name="reportType" id="reportType" onChange={handleReportTypeChange}>
          <option value="daily">daily</option>
          <option value="monthly">monthly</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">materials</th>
            <th scope="col">final product</th>
            <th scope="col">entered</th>
            <th scope="col">out</th>
            <th scope="col">total</th>
          </tr>
        </thead>
        <tbody>
          <NewMaterialsRow  selectedDate={selectedDate} reportType={reportType} />
          <ExistingMaterialsRow selectedDate={selectedDate} reportType={reportType} />
        </tbody>
      </table>
    </div>
  );
};

export default HistoryOfMaterials;
