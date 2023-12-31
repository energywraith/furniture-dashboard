import { IconProps } from "@/components/icons";
import { ReactNode } from "react";
import { variants } from "./variants";

interface ButtonProps {
  variant?: keyof typeof variants;
  LeftAttachmentIcon?: React.FC<IconProps>;
  RightAttachmentIcon?: React.FC<IconProps>;
  children: ReactNode;
}

const Button = ({
  variant = "medium",
  LeftAttachmentIcon,
  RightAttachmentIcon,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`border border-neutral-700 rounded-md text-body-s font-semibold flex items-center gap-x-1.5 ${variants[variant]}`}
    >
      {LeftAttachmentIcon && <LeftAttachmentIcon className="h-4" />}
      {children}
      {RightAttachmentIcon && <RightAttachmentIcon className="h-4" />}
    </button>
  );
};

export { Button };
