import { MoreIcon } from "@/components/icons";
import { HTMLProps } from "react";

interface CardProps extends HTMLProps<HTMLDivElement> {
  title: string;
}

const Card = ({ title, className, children, ...props }: CardProps) => (
  <div
    {...props}
    className={`shadow-xs border border-neutral-600 rounded-xl w-fit ${className}`}
  >
    <div className="flex justify-between px-6 py-4 border-b border-neutral-600">
      <h2 className="text-body-m xl:text-body-l font-medium text-gray-700">
        {title}
      </h2>
      <MoreIcon className="w-6 h-6" />
    </div>
    <div>{children}</div>
  </div>
);

export { Card };
