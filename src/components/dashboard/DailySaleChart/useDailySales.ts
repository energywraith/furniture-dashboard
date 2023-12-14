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
        startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toUTCString(),
        endDate: new Date(Date.now()).toUTCString(),
      });

      setDailySales(dailySales);
      setIsLoading(false);
    };

    fetchDailySalesForClient();
  }, [selectedClient]);

  return { isLoading, dailySales };
};

export { useDailySales };
