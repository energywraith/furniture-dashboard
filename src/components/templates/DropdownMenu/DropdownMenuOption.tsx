import { IconProps } from "@/components/icons";

export interface DropdownMenuOption {
  id: string;
  label: string;
  Icon?: React.FC<IconProps>;
  onClick: () => void;
}

interface DropdownMenuOptionProps extends DropdownMenuOption {
  onOptionClickHandle: (callback: () => void) => void;
}

const DropdownMenuOption = ({
  onClick,
  Icon,
  label,
  onOptionClickHandle,
}: DropdownMenuOptionProps) => {
  return (
    <li>
      <button
        onClick={() => onOptionClickHandle(onClick)}
        className="py-3 px-4 flex items-center gap-x-2 text-body-s text-gray-700 w-full hover:bg-info-100"
      >
        {Icon && <Icon className="w-4 h-4" />}
        <span>{label}</span>
      </button>
    </li>
  );
};

export { DropdownMenuOption };
