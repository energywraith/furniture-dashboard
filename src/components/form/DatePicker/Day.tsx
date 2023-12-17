import { ReactNode } from "react";

interface DayProps {
  children: ReactNode;
  disabled?: boolean;
  selected?: boolean;
}

const Day = ({ children, disabled, selected }: DayProps) => (
  <button
    disabled={disabled}
    className={`text-body-s font-medium w-9 h-9 flex items-center justify-center rounded text-gray-700 disabled:text-neutral-700 ${
      selected
        ? "bg-info-600 text-white hover:text-white cursor-default"
        : "hover:text-info-600"
    }`}
  >
    {children}
  </button>
);

export { Day };
