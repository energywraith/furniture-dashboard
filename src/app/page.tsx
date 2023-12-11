import { Button } from "@/components/common/Button";
import { BellIcon } from "@/components/icons";
import { DownloadIcon } from "@/components/icons/DownloadIcon";
import { ShareIcon } from "@/components/icons/ShareIcon";
import { Page } from "@/components/templates/Page";

export default function Home() {
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
    </Page>
  );
}
