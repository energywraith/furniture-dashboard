"use client";

import { Chart } from "@/components/templates/Chart";
import { Select } from "@/components/form/Select";
import { useEffect, useMemo, useState } from "react";
import { AreaChartProps } from "@tremor/react";
import { useDailySales } from "./useDailySales";

interface DailySaleChartProps {
  clients: {
    id: string;
    name: string;
  }[];
  initialDailySales: AreaChartProps["data"];
}

const DailySaleChart = ({
  initialDailySales,
  clients,
}: DailySaleChartProps) => {
  const [selectedClientId, setSelectedClientId] = useState(clients[0]?.id);

  const selectedClient = useMemo(
    () => clients.find((client) => client.id === selectedClientId),
    [clients, selectedClientId]
  );

  const { dailySales, isLoading: isInitialDailySalesLoading } = useDailySales({
    initialDailySales,
    selectedClient,
  });

  return (
    <>
      <div className="mt-8 md:mt-6 grid grid-cols-[1fr_1fr] md:flex gap-x-3">
        <Select
          options={clients}
          value={selectedClientId}
          onValueChange={setSelectedClientId}
          placeholder="Klient"
          className="md:w-72"
          enableClear={false}
          disabled={isInitialDailySalesLoading}
        />
        <div className="" />
      </div>
      <Chart
        data={dailySales}
        className="mt-6 h-[375px]"
        index="day"
        categories={["Ilość produktów"]}
      />
    </>
  );
};
export { DailySaleChart };
