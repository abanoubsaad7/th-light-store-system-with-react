// Function to sort rows based on the date in the "dateReport" column
function sortRows() {
  const table = document.querySelector('.table'); // Assuming your table has the "table" class
  const rows = Array.from(table.querySelectorAll('tbody tr'));

  const cellsByRow = rows.map(row => Array.from(row.querySelectorAll('td')));

  rows.sort((a, b) => {
    const dateA = getDateFromRow(a);
    const dateB = getDateFromRow(b);
    return dateA.localeCompare(dateB);
  });

  // Re-append sorted rows to the table
  rows.forEach((sortedRow, index) => {
    const originalRow = rows[index];
    const cells = cellsByRow[index];

    // Update rowspan cells
    cells.forEach((cell, cellIndex) => {
      const rowspan = cell.getAttribute('rowspan');
      if (rowspan && rowspan > 1) {
        // Move the cell to the next row
        const nextRow = rows[index + 1];
        if (nextRow) {
          const nextCell = nextRow.querySelector(`td:nth-child(${cellIndex + 1})`);
          if (nextCell) {
            nextCell.parentNode.insertBefore(cell, nextCell);
          }
        }
      }
    });

    // Re-append sorted row to the table
    table.appendChild(sortedRow);
  });
}

// Function to extract the date from a row
function getDateFromRow(row) {
  const dateReportCell = row.querySelector('.dateReport');
  return dateReportCell ? dateReportCell.textContent : ""; // Handle null case
}

export default sortRows;
