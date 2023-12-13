"use client";

import { useState } from "react";
import {
  Select as TremorSelect,
  SelectItem as TremorSelectItem,
} from "@tremor/react";

const options = [
  {
    value: "1",
    label: "Kilometers",
  },
  {
    value: "2",
    label: "Meters",
  },
  {
    value: "3",
    label: "Miles",
  },
  {
    value: "4",
    label: "Nautical Miles",
  },
];

const Select = () => {
  const [value, setValue] = useState(options[0]?.value);

  return (
    <TremorSelect
      value={value}
      onValueChange={setValue}
      placeholder="Klient"
      className="w-72"
      enableClear={false}
    >
      {options.map((option) => (
        <TremorSelectItem key={option.value} value={option.value}>
          {option.label}
        </TremorSelectItem>
      ))}
    </TremorSelect>
  );
};

export { Select };
