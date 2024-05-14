import React, { useState } from "react";
import NewMaterialsRow from "../components/table_row_components/newMaterialsRow";
import ExistingMaterialsRow from "../components/table_row_components/existingMaterialsRow";
import NewFinalProductRow from "../components/table_row_components/newFinalProductRow";
import ExistingFinalProductRow from "../components/table_row_components/existingFinalProductRow";
import MainNav from "../components/main_and_side_Bar/mainNav";
import SideBar from "../components/main_and_side_Bar/sideBar";
// import sortRows from "../sortDates";
const HistoryOfMaterials = () => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    return formattedDate;
  });
  const [reportType, setReportType] = useState("daily"); // State to store selected report type

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Update selectedDate state when date changes
  };

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value); // Update reportType state when report type changes
  };

  // const handleCheckboxChange = () => {
  //   setSortChecked(!sortChecked); // Toggle checkbox state
  //   if (!sortChecked) {
  //     sortRows() // Call sortRows function when checkbox is checked
  //   }
  // };

  return (
    <div>
      <MainNav />
      <div className="row container">
        <div className="col-lg-3">
          <SideBar />
        </div>
        <div className="container pageContent col-lg-8">
          <div className="materialFilter">
            <input
              type="date"
              name="selectedDate"
              id="selectedDate"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <br />
            <br />
            <select
              name="reportType"
              id="reportType"
              onChange={handleReportTypeChange}
            >
              <option value="daily">daily</option>
              <option value="monthly">monthly</option>
            </select>
            <button
              className="btn btn-lg btn-primary"
              onClick={() => window.print()}
              style={{ float: 'right' }}
            >
              print the report
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="dateReport">
                  Date
                  {/* <input type="checkbox" onChange={handleCheckboxChange} /> */}
                </th>
                <th scope="col">materials</th>
                <th scope="col">entered</th>
                <th scope="col">out</th>
                <th scope="col">final product</th>
                <th scope="col">entered</th>
                <th scope="col">out</th>
              </tr>
            </thead>
            <tbody>
              <NewMaterialsRow
                selectedDate={selectedDate}
                reportType={reportType}
              />
              <ExistingMaterialsRow
                selectedDate={selectedDate}
                reportType={reportType}
              />
              <NewFinalProductRow
                selectedDate={selectedDate}
                reportType={reportType}
              />
              <ExistingFinalProductRow
                selectedDate={selectedDate}
                reportType={reportType}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryOfMaterials;
