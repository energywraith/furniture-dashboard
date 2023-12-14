import { CloseIcon, MoreIcon } from "@/components/icons";
import { useRef, useState } from "react";
import { DropdownMenuTransition } from "./DropdownMenuTransition";
import { DropdownMenuOption } from "./DropdownMenuOption";
import { useClickOutside } from "@/hooks/useClickOutside";

interface DropdownMenuProps {
  options: DropdownMenuOption[];
}

const DropdownMenu = ({ options }: DropdownMenuProps) => {
  const menuRef = useRef(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const MenuIcon = isMenuVisible ? CloseIcon : MoreIcon;

  const toggleMenu = () => {
    setIsMenuVisible((value) => !value);
  };

  const onOptionClick = (callback: () => void) => {
    setIsMenuVisible(false);
    callback();
  };

  useClickOutside({
    ref: menuRef,
    onClickOutside: () => {
      setIsMenuVisible((isVisible) => {
        if (isVisible) {
          return !isVisible;
        }

        return isVisible;
      });
    },
  });

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={toggleMenu}
        className={` rounded-full p-2 ${
          !isMenuVisible ? "hover:bg-info-100 hover:text-info-950" : ""
        }`}
      >
        <MenuIcon className="w-6 h-6" />
      </button>
      <DropdownMenuTransition active={isMenuVisible}>
        <div className="mt-3 w-56 rounded-md bg-white focus:outline-none py-1 shadow-xs border border-neutral-700">
          <ul>
            {options.map((option) => (
              <DropdownMenuOption
                key={option.id}
                {...option}
                onOptionClickHandle={onOptionClick}
              />
            ))}
          </ul>
        </div>
      </DropdownMenuTransition>
    </div>
  );
};

export { DropdownMenu };
