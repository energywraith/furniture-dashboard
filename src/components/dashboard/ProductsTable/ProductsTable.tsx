"use client";

import { Card } from "@/components/common/Card";
import { Table } from "@/components/templates/Table";
import { columns } from "./columns";
import { Rows } from "@/components/templates/Table/types";

interface ProductsTableProps {
  products: Rows;
}

const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <Card title="Najczęściej zamawiane produkty" className="w-full">
      <Table columns={columns} rows={products} />
    </Card>
  );
};

export { ProductsTable };
