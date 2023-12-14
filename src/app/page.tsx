import { getDailySales } from "./lib/getDailySales";
import { getTopOrderedProducts } from "./lib/getTopOrderedProducts";
import { getTopOrderedClients } from "./lib/getTopOrderedClients";
import { Button } from "@/components/common/Button";
import { DownloadIcon } from "@/components/icons/DownloadIcon";
import { ShareIcon } from "@/components/icons/ShareIcon";
import { Chart } from "@/components/templates/Chart";
import { Page } from "@/components/templates/Page";
import { Select } from "@/components/form/Select";
import { ClientsTable } from "@/components/dashboard/ClientsTable";
import { ProductsTable } from "@/components/dashboard/ProductsTable";

async function getData() {
  const dailySales = await getDailySales({
    clientId: 18,
    startDate: "2023-12-05T00:00:00.000Z",
    endDate: "2023-12-12T00:00:00.000Z",
  });

  const topOrderedProducts = await getTopOrderedProducts();
  const topOrderedClients = await getTopOrderedClients();

  return { dailySales, topOrderedProducts, topOrderedClients };
}

export default async function Home() {
  const { dailySales, topOrderedProducts, topOrderedClients } = await getData();

  return (
    <Page>
      <section className="flex flex-col md:flex-row gap-y-8 justify-between items-start">
        <div className="flex-col">
          <h1 className="text-headline-xs font-semibold text-gray-700">
            Dzienna sprzedaż
          </h1>
          <p className="text-paragraph-2 text-gray-50 mt-1">
            Podsumowanie dziennej sprzedaży według klienta w wybranym zakresie
            dat.
          </p>
        </div>
        <div className="flex gap-x-2">
          <Button LeftAttachmentIcon={ShareIcon}>Udostępnij</Button>
          <Button LeftAttachmentIcon={DownloadIcon}>Eksportuj</Button>
        </div>
      </section>
      <div className="mt-6 flex gap-x-3">
        <Select />
        <Select />
      </div>
      <Chart
        data={dailySales}
        className="mt-6 h-[375px]"
        index="day"
        categories={["Ilość produktów"]}
      />
      <div className="flex flex-col gap-x-6 mt-20 gap-y-16 md:grid md:grid-cols-[60%_1fr]">
        <ProductsTable products={topOrderedProducts} />
        <ClientsTable clients={topOrderedClients} />
      </div>
    </Page>
  );
}
