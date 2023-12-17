"use server";

interface DailySaleRecord {
  clientId: string;
  quantity: number;
  createdDate: string;
}

interface GetDailySalesProps {
  client: {
    id: string;
    name: string;
  };
  startDate: string;
  endDate: string;
}

const parseDailySales = (dailySales: DailySaleRecord[], clientName: string) =>
  dailySales.map((record) => {
    const createdDate = new Date(record.createdDate);
    const day = createdDate
      .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit" })
      .replace(/\//g, ".");

    return {
      day,
      clientId: record.clientId,
      label: clientName,
      "Ilość produktów": record.quantity,
    };
  });

export const getDailySales = async ({
  client,
  startDate,
  endDate,
}: GetDailySalesProps) => {
  try {
    const response = await fetch(
      `${process.env.API_URI}/Analytics/daily-order-data?clientId=${client.id}&startDate=${startDate}&endDate=${endDate}`
    );

    if (response.ok) {
      const responseJSON: DailySaleRecord[] = await response.json();

      return parseDailySales(responseJSON, client.name);
    }

    throw "Daily sales for such parameters does not exist.";
  } catch (error) {
    throw error;
  }
};
