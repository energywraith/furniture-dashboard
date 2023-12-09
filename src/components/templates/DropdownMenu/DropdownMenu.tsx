import { Tooltip } from "@/components/common/Tooltip";
import { ChevronIcon, IconProps } from "@/components/icons";
import { HTMLProps } from "react";

interface DropdownMenuProps extends HTMLProps<HTMLDivElement> {
  Icon: React.FC<IconProps>;
  tooltipText: string;
}

const DropdownMenu = ({ Icon, tooltipText }: DropdownMenuProps) => {
  return (
    <button className="group border-2 border-transparent hover:border-info-950 rounded-[40px] p-0.5 hover:text-info-950">
      <div className="group-hover:bg-info-100 w-full h-full rounded-[40px] p-3 flex items-center gap-x-1">
        <Tooltip text={tooltipText}>
          <Icon className="w-6 h-6" />
        </Tooltip>
        <ChevronIcon className="w-4 h-4" />
      </div>
    </button>
  );
};

export { DropdownMenu };
