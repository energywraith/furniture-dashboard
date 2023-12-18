import { CloseIcon, MoreIcon } from "@/components/icons";
import { useState } from "react";
import { DropdownMenuOption } from "./DropdownMenuOption";
import { Popup } from "@/components/common/Popup";

interface DropdownMenuProps {
  options: DropdownMenuOption[];
}

const DropdownMenu = ({ options }: DropdownMenuProps) => {
  return (
    <Popup
      renderContent={({ onClosePopup }) => (
        <div className="mt-3 w-56 rounded-md bg-white focus:outline-none py-1 shadow-xs border border-neutral-700">
          <ul>
            {options.map((option) => (
              <DropdownMenuOption
                key={option.id}
                {...option}
                onOptionClickHandle={(callback: () => void) => {
                  onClosePopup();
                  callback();
                }}
              />
            ))}
          </ul>
        </div>
      )}
      origin="right"
      isIcon
    >
      {({ isContentVisible }) => {
        const MenuIcon = isContentVisible ? CloseIcon : MoreIcon;
        return <MenuIcon className="w-6 h-6" />;
      }}
    </Popup>
  );
};

export { DropdownMenu };
