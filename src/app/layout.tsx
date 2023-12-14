import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/templates/Header";
import { Tabs } from "@/components/templates/Tabs";
import { Footer } from "@/components/templates/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eltap - Dashboard",
  description: "Podsumowanie sprzedaży produktów.",
};

const tabs = [
  {
    path: "/orders",
    label: "Zamówienia",
    notificationCount: 0,
  },
  {
    path: "/",
    label: "Dashboard",
    notificationCount: 0,
  },
  {
    path: "/products",
    label: "Produkty",
    notificationCount: 0,
  },
  {
    path: "/products/cards",
    label: "Karty produktów",
    notificationCount: 0,
  },
  {
    path: "/products/attributes",
    label: "Atrybuty produktów",
    notificationCount: 0,
  },
  {
    path: "/categories",
    label: "Kategorie",
    notificationCount: 3,
  },
  {
    path: "/updates",
    label: "Aktualności",
    notificationCount: 0,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid grid-rows-[auto_auto_1fr_auto] min-h-screen`}
      >
        <Header />
        <Tabs tabs={tabs} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
