import React from "react";
import "../css/MultiColumnTable.css";

interface MultiColumnTableProps {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
  rowsPerColumn?: number;
  sortAlphabetically?: boolean;
}

export default function MultiColumnTable({
  headers,
  rows,
  rowsPerColumn = 10,
  sortAlphabetically = false,
}: MultiColumnTableProps) {
  const sortedRows = sortAlphabetically
    ? [...rows].sort((a, b) => {
        const aValue = String(a[0] || "").toLowerCase();
        const bValue = String(b[0] || "").toLowerCase();
        return aValue.localeCompare(bValue);
      })
    : rows;

  const columns: React.ReactNode[][][] = [];

  for (let i = 0; i < sortedRows.length; i += rowsPerColumn) {
    columns.push(sortedRows.slice(i, i + rowsPerColumn));
  }

  return (
    <div className="multi-column-table">
      {columns.map((columnRows, columnIndex) => (
        <table key={columnIndex} className="multi-column-table__table">
          <thead>
            <tr>
              {headers.map((header, headerIndex) => (
                <th key={headerIndex}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {columnRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}
