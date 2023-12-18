import { HTMLProps, ReactNode } from "react";

interface DayProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  isInRange?: boolean;
  type?: "button" | "submit" | "reset";
}

const Day = ({
  children,
  disabled,
  selected,
  isInRange,
  ...props
}: DayProps) => (
  <button
    type="button"
    disabled={disabled}
    className={`text-body-s font-medium w-9 h-9 flex items-center justify-center rounded text-gray-700 disabled:text-neutral-700 ${
      selected
        ? "bg-info-600 text-white hover:text-white cursor-default"
        : "hover:text-info-600"
    } ${isInRange ? "bg-info-100" : ""}`}
    {...props}
  >
    {children}
  </button>
);

export { Day };
