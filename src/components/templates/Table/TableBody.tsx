"use client";

import {
  TableBody as TremorTableBody,
  TableRow as TremorTableRow,
  TableCell as TremorTableCell,
} from "@tremor/react";
import { Columns, Rows } from "./types";

interface TableBodyProps {
  columns: Columns;
  rows: Rows;
}

const TableBody = ({ columns, rows }: TableBodyProps) => (
  <TremorTableBody>
    {rows.map((item) => (
      <TremorTableRow key={item.name}>
        {Object.keys(columns).map((column) => {
          const renderComponent = columns[column].renderComponent;
          const Component = renderComponent
            ? renderComponent(item[column])
            : item[column];

          return (
            <TremorTableCell
              key={columns[column].label}
              className="py-2 first-of-type:pl-6 last-of-type:pr-6"
            >
              <span className="text-body-s font-medium text-gray-50">
                {Component}
              </span>
            </TremorTableCell>
          );
        })}
      </TremorTableRow>
    ))}
  </TremorTableBody>
);

export { TableBody };
