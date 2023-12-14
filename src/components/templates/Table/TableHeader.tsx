import {
  TableHead as TremorTableHead,
  TableRow as TremorTableRow,
  TableHeaderCell as TremorTableHeaderCell,
} from "@tremor/react";
import { Columns } from "./types";

interface TableHeaderProps {
  columns: Columns;
}

const TableHeader = ({ columns }: TableHeaderProps) => (
  <TremorTableHead>
    <TremorTableRow className="border-b border-neutral-600">
      {Object.keys(columns).map((column) => (
        <TremorTableHeaderCell
          key={columns[column].label}
          className="py-3 first-of-type:pl-6 last-of-type:pr-6"
        >
          <span className="text-body-xs font-medium text-gray-50">
            {columns[column].label}
          </span>
        </TremorTableHeaderCell>
      ))}
    </TremorTableRow>
  </TremorTableHead>
);

export { TableHeader };
