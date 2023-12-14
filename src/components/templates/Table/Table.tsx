"use client";

import { Table as TremorTable } from "@tremor/react";
import { TableHeader } from "./TableHeader";
import { Columns, Rows } from "./types";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";

import { usePagination } from "./usePagination";

interface TableProps {
  columns: Columns;
  rows: Rows;
  withCompactPaginator?: boolean;
}

const Table = ({ columns, rows, withCompactPaginator }: TableProps) => {
  const pagination = usePagination(rows);

  return (
    <TremorTable>
      <TableHeader columns={columns} />
      <TableBody columns={columns} rows={pagination.data} />
      <TableFooter
        isCompact={withCompactPaginator}
        currentPage={pagination.page}
        totalPages={pagination.totalPages}
        onPrevPage={pagination.onPrevPage}
        onPage={pagination.onPage}
        onNextPage={pagination.onNextPage}
      />
    </TremorTable>
  );
};

export { Table };
