import { AreaChartProps } from "@tremor/react";
import { useEffect, useState } from "react";
import { getDailySales } from "@/app/lib/getDailySales";
import { DateRange } from "@/components/form/DatePicker/types";
import moment from "moment";

interface useDailySalesProps {
  initialDailySales: AreaChartProps["data"];
  selectedClient?: {
    id: string;
    name: string;
  };
  selectedDateRange: DateRange;
}

const useDailySales = ({
  initialDailySales,
  selectedClient,
  selectedDateRange,
}: useDailySalesProps) => {
  const [dailySales, setDailySales] = useState(initialDailySales);

  const [isServerLoaded, setIsServerLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setIsServerLoaded(true);
  }, []);

  useEffect(() => {
    if (!isServerLoaded) {
      return;
    }

    const fetchDailySalesForClient = async () => {
      if (
        !selectedClient ||
        !selectedDateRange.startDate ||
        !selectedDateRange.endDate
      ) {
        setDailySales([]);
        return;
      }

      setIsLoading(true);

      const dailySales = await getDailySales({
        client: selectedClient,
        startDate: moment.utc(selectedDateRange.startDate).format(),
        endDate: moment.utc(selectedDateRange.endDate).format(),
      });

      setDailySales(dailySales);
      setIsLoading(false);
    };

    fetchDailySalesForClient();
  }, [selectedClient, selectedDateRange]);

  return { isLoading, dailySales };
};

export { useDailySales };
