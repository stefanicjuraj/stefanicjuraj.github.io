import React from "react";
import "../css/MultiColumnList.css";

interface MultiColumnListProps {
  items: string[];
  itemsPerColumn?: number;
}

export default function MultiColumnList({
  items,
  itemsPerColumn = 10,
}: MultiColumnListProps) {
  const columns: string[][] = [];

  for (let i = 0; i < items.length; i += itemsPerColumn) {
    columns.push(items.slice(i, i + itemsPerColumn));
  }

  return (
    <div className="multi-column-list">
      {columns.map((column, columnIndex) => (
        <ul key={columnIndex} className="multi-column-list__column">
          {column.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}
