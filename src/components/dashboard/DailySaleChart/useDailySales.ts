import { AreaChartProps } from "@tremor/react";
import { useEffect, useState } from "react";
import { getDailySales } from "@/app/lib/getDailySales";

interface useDailySalesProps {
  initialDailySales: AreaChartProps["data"];
  selectedClient?: {
    id: string;
    name: string;
  };
}

const useDailySales = ({
  initialDailySales,
  selectedClient,
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
      if (!selectedClient) {
        setDailySales([]);
        return;
      }

      setIsLoading(true);

      const dailySales = await getDailySales({
        client: selectedClient,
        startDate: "2023-12-05T00:00:00.000Z",
        endDate: "2023-12-12T00:00:00.000Z",
      });

      setDailySales(dailySales);
      setIsLoading(false);
    };

    fetchDailySalesForClient();
  }, [selectedClient]);

  return { isLoading, dailySales };
};

export { useDailySales };
