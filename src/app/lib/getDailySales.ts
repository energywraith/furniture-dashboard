interface DailySaleRecord {
  clientId: number;
  quantity: number;
  createdDate: string;
}

interface GetDailySalesProps {
  clientId: number;
  startDate: string;
  endDate: string;
}

const parseDailySales = (dailySales: DailySaleRecord[]) =>
  dailySales.map((record) => {
    const createdDate = new Date(record.createdDate);
    const day = createdDate
      .toLocaleDateString("en-US", { day: "2-digit", month: "2-digit" })
      .replace(/\//g, ".");

    return {
      day,
      clientId: record.clientId,
      label: "ETNO Meble",
      "Ilość produktów": record.quantity,
    };
  });

export const getDailySales = async ({
  clientId,
  startDate,
  endDate,
}: GetDailySalesProps) => {
  try {
    const response = await fetch(
      `https://api-test.eltap.com/api/v1/Analytics/daily-order-data?clientId=${clientId}&startDate=${startDate}&endDate=${endDate}`
    );

    if (response.ok) {
      const responseJSON: DailySaleRecord[] = await response.json();
      return parseDailySales(responseJSON);
    }

    throw "Daily sales for such parameters does not exist.";
  } catch (error) {
    throw error;
  }
};
