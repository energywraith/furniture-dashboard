"use client";

import { Chart } from "@/components/templates/Chart";
import { Select } from "@/components/form/Select";
import { useMemo, useState } from "react";
import { AreaChartProps } from "@tremor/react";
import { useDailySales } from "./useDailySales";
import { DatePicker } from "@/components/form/DatePicker";
import moment from "moment";
import { DateRange } from "@/components/form/DatePicker/types";

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
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    startDate: moment().subtract(7, "days"),
    endDate: moment(),
  });

  const selectedClient = useMemo(
    () => clients.find((client) => client.id === selectedClientId),
    [clients, selectedClientId]
  );

  const { dailySales, isLoading: isInitialDailySalesLoading } = useDailySales({
    initialDailySales,
    selectedClient,
    selectedDateRange,
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
        <DatePicker
          dateRange={selectedDateRange}
          maxDate={moment()}
          onChangeDate={setSelectedDateRange}
          disabled={isInitialDailySalesLoading}
        />
      </div>
      <Chart
        data={dailySales}
        className="mt-6 h-[385px] md:h-[375px]"
        index="day"
        categories={["Ilość produktów"]}
      />
    </>
  );
};
export { DailySaleChart };
