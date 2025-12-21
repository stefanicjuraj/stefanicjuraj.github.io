import React from "react";
import "../css/MultiColumnTable.css";

interface MultiColumnTableProps {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
  rowsPerColumn?: number;
}

export default function MultiColumnTable({
  headers,
  rows,
  rowsPerColumn = 10,
}: MultiColumnTableProps) {
  const columns: React.ReactNode[][][] = [];

  for (let i = 0; i < rows.length; i += rowsPerColumn) {
    columns.push(rows.slice(i, i + rowsPerColumn));
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
