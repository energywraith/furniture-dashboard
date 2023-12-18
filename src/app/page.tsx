import { getDailySales } from "./lib/getDailySales";
import { getTopOrderedProducts } from "./lib/getTopOrderedProducts";
import { getTopOrderedClients } from "./lib/getTopOrderedClients";
import { Button } from "@/components/common/Button";
import { DownloadIcon } from "@/components/icons/DownloadIcon";
import { ShareIcon } from "@/components/icons/ShareIcon";
import { Page } from "@/components/templates/Page";
import { ClientsTable } from "@/components/dashboard/ClientsTable";
import { ProductsTable } from "@/components/dashboard/ProductsTable";
import { getClients } from "./lib/getClients";
import { DailySaleChart } from "@/components/dashboard/DailySaleChart";
import moment from "moment";

async function getData() {
  const clients = await getClients();

  const dailySales = await getDailySales({
    client: clients[0],
    startDate: moment.utc().subtract(7, "days").format(),
    endDate: moment.utc().format(),
  });

  const topOrderedProducts = await getTopOrderedProducts();
  const topOrderedClients = await getTopOrderedClients();

  return { clients, dailySales, topOrderedProducts, topOrderedClients };
}

export default async function Home() {
  const { clients, dailySales, topOrderedProducts, topOrderedClients } =
    await getData();

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
      <DailySaleChart initialDailySales={dailySales} clients={clients} />
      <div className="flex flex-col gap-x-6 mt-14 md:mt-16 md:pt-2 gap-y-16 md:grid md:grid-cols-[66%_1fr] xl:grid-cols-[57.5%_1fr]">
        <ProductsTable products={topOrderedProducts} />
        <ClientsTable clients={topOrderedClients} />
      </div>
    </Page>
  );
}
