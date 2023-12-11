"use client";

import { RefObject, useState } from "react";
import { Tab, ITab } from "./Tab";

interface TabsProps {
  tabs: ITab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [sliderLeft, setSliderLeft] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);

  const onPathChange = (ref: RefObject<HTMLAnchorElement>) => {
    if (!ref?.current) {
      return;
    }

    setSliderLeft(ref.current.offsetLeft);
    setTabWidth(ref.current.offsetWidth);
  };

  return (
    <nav className="container flex border-b border-neutral-600">
      <ul className="flex gap-x-6 relative">
        {tabs.map((tab) => (
          <Tab key={tab.path} {...tab} onPathChange={onPathChange} />
        ))}
        <li
          role="presentation"
          style={{ left: sliderLeft, width: tabWidth }}
          className={`h-0.5 absolute left-0 bottom-0 bg-info-600 transition-all`}
        />
      </ul>
    </nav>
  );
};

export { Tabs };
