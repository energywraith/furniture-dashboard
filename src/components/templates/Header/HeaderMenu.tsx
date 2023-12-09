import { SVGProps } from "react";
import { HamburgerIcon } from "@/components/icons";

interface HeaderMenuProps extends SVGProps<SVGSVGElement> {}

const HeaderMenu = ({ className }: HeaderMenuProps) => {
  return (
    <button
      className={`flex items-center justify-center w-10 h-10 md:w-11 md:h-11 p-2 hover:bg-info-100 hover:text-info-950 rounded-full ${className}`}
    >
      <HamburgerIcon />
    </button>
  );
};

export { HeaderMenu };
