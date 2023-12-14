"use client";

import { Card } from "@/components/common/Card";
import { Table } from "@/components/templates/Table";
import { columns } from "./columns";
import { Rows } from "@/components/templates/Table/types";

interface ClientsTableProps {
  clients: Rows;
}

const ClientsTable = ({ clients }: ClientsTableProps) => {
  return (
    <Card title="Najczęściej zamawiający klienci" className="w-full">
      <Table columns={columns} rows={clients} withCompactPaginator />
    </Card>
  );
};

export { ClientsTable };
