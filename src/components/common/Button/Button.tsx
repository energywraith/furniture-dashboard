import { IconProps } from "@/components/icons";
import { ReactNode } from "react";

interface ButtonProps {
  LeftAttachmentIcon?: React.FC<IconProps>;
  RightAttachmentIcon?: React.FC<IconProps>;
  children: ReactNode;
}

const Button = ({
  LeftAttachmentIcon,
  RightAttachmentIcon,
  children,
}: ButtonProps) => {
  return (
    <button className="border border-neutral-700 rounded-md px-3 py-2.5 text-body-s font-semibold flex items-center gap-x-1.5">
      {LeftAttachmentIcon && <LeftAttachmentIcon className="h-4" />}
      {children}
      {RightAttachmentIcon && <RightAttachmentIcon className="h-4" />}
    </button>
  );
};

export { Button };
