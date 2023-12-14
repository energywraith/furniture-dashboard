import { ReactNode } from "react";

export interface Column {
  label: string;
  renderComponent?: (value: string | number) => ReactNode;
}

export interface Columns {
  [key: string]: Column;
}

export interface Row {
  [key: string | symbol]: string | number;
}

export type Rows = Row[];
