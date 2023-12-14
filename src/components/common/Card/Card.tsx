import { HTMLProps } from "react";
import {
  DropdownMenu,
  DropdownMenuOption,
} from "@/components/templates/DropdownMenu";

interface CardProps extends HTMLProps<HTMLDivElement> {
  title: string;
  menuOptions?: DropdownMenuOption[];
}

const Card = ({
  title,
  className,
  children,
  menuOptions,
  ...props
}: CardProps) => (
  <div
    {...props}
    className={`shadow-xs border border-neutral-600 rounded-xl w-fit ${className}`}
  >
    <div
      className={`flex justify-between border-b border-neutral-600 items-center ${
        menuOptions ? "py-2 pl-6 pr-4" : "py-4 px-6"
      }`}
    >
      <h2 className="text-body-m xl:text-body-l font-medium text-gray-700">
        {title}
      </h2>
      {menuOptions && <DropdownMenu options={menuOptions} />}
    </div>
    <div>{children}</div>
  </div>
);

export { Card };
