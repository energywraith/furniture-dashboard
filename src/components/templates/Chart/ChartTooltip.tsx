import Label from "@/components/common/Label/Label";

interface ChartTooltipPayload {
  dataKey?: string | number;
  name?: string | number;
  value?: string | number | (string | number)[];
  payload?: {
    label: string | number;
  };
}

interface ChartTooltipProps {
  payload?: ChartTooltipPayload[];
  label?: string | number;
}

const ChartTooltip = ({ payload, label }: ChartTooltipProps) => {
  if (!payload?.[0]) {
    return;
  }

  const { value, dataKey, payload: dataPayload } = payload[0];

  return (
    <div className="flex flex-col bg-base-white p-6 shadow text-body-xs font-medium gap-y-3 rounded-lg">
      <Label variant="info-dark">{dataPayload?.label}</Label>
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-50">
        {dataKey}:
        <span className="ml-4 font-semibold text-gray-700">{value}</span>
      </span>
    </div>
  );
};

export { ChartTooltip };
