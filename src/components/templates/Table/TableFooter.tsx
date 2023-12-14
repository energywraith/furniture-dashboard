"use client";

import {
  TableFoot as TremorTableFoot,
  TableRow as TremorTableRow,
  TableCell as TremorTableCell,
} from "@tremor/react";
import { TablePagination, TablePaginationProps } from "./TablePagination";

interface TableFooterProps extends TablePaginationProps {}

const TableFooter = (props: TableFooterProps) => {
  return (
    <TremorTableFoot>
      <TremorTableRow>
        <TremorTableCell colSpan={60} className="px-6 py-3 w-full">
          <TablePagination {...props} />
        </TremorTableCell>
      </TremorTableRow>
    </TremorTableFoot>
  );
};

export { TableFooter };
