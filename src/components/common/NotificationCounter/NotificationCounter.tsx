import { HTMLProps } from "react";

interface NotificationCounterProps extends HTMLProps<HTMLDivElement> {
  count: number;
  isActive?: boolean;
}

const NotificationCounter = ({
  className,
  count,
  isActive,
}: NotificationCounterProps) => {
  return (
    <div
      className={`px-1.5 rounded-3xl text-body-xs font-normal flex justify-center items-center ${
        isActive ? "bg-info-600 text-base-white" : "bg-neutral-500"
      } ${className}`}
    >
      {count}
    </div>
  );
};

export { NotificationCounter };
