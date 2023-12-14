import { DownloadIcon } from "@/components/icons/DownloadIcon";
import { ShareIcon } from "@/components/icons/ShareIcon";

export const tableMenuOptions = [
  {
    id: "share",
    label: "Udostępnij",
    Icon: ShareIcon,
    onClick: () => {
      console.log("Udostępnij");
    },
  },
  {
    id: "export",
    label: "Eksportuj",
    Icon: DownloadIcon,
    onClick: () => {
      console.log("Eksportuj");
    },
  },
];
