"use client";

import {
  Select as TremorSelect,
  SelectItem as TremorSelectItem,
  SelectProps as TremorSelectProps,
} from "@tremor/react";

interface SelectProps extends Omit<TremorSelectProps, "children"> {
  options: {
    id: string;
    name: string;
  }[];
}

const Select = ({ options, ...props }: SelectProps) => {
  return (
    <TremorSelect {...props}>
      {options.map((option) => (
        <TremorSelectItem key={option.id} value={option.id}>
          {option.name}
        </TremorSelectItem>
      ))}
    </TremorSelect>
  );
};

export { Select };
