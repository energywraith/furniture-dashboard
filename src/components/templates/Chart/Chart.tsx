"use client";

import { AreaChart, AreaChartProps } from "@tremor/react";
import { ChartTooltip } from "./ChartTooltip";

const Chart = (props: AreaChartProps) => {
  return (
    <AreaChart
      colors={["blue"]}
      yAxisWidth={32}
      customTooltip={ChartTooltip}
      {...props}
    />
  );
};

export { Chart };
