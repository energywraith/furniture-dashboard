"use client";

import { RefObject, useState } from "react";
import { Tab, ITab } from "./Tab";
import { TabsCarousel } from "./TabsCarousel";

interface TabsProps {
  tabs: ITab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  return (
    <nav className="container flex border-b border-neutral-600 overflow-hidden relative">
      <TabsCarousel slidesPerView="auto" spaceBetween={24}>
        {tabs.map((tab) => (
          <Tab key={tab.path} {...tab} />
        ))}
      </TabsCarousel>
    </nav>
  );
};

export { Tabs };
