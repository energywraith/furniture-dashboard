import { HTMLProps, ReactNode, useRef, useState } from "react";
import { PopupContentWrapper } from "./PopupContentWrapper";
import { useClickOutside } from "@/hooks/useClickOutside";

interface PopupProps {
  renderContent: (onClosePopup: () => void) => ReactNode;
  origin?: "center" | "right";
  isIcon?: boolean;
  children: (isOpen: boolean) => ReactNode;
  className?: string;
}

const Popup = ({
  children,
  renderContent,
  origin,
  isIcon,
  className,
}: PopupProps) => {
  const ref = useRef(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleMenu = () => {
    setIsContentVisible((isVisible) => !isVisible);
  };

  useClickOutside({
    ref: ref,
    onClickOutside: () => {
      setIsContentVisible((isVisible) => {
        if (isVisible) {
          return !isVisible;
        }

        return isVisible;
      });
    },
  });

  return (
    <div ref={ref} className={className || "relative"}>
      <button
        onClick={toggleMenu}
        className={
          isIcon
            ? `rounded-full p-2 ${
                !isContentVisible ? "hover:bg-info-100 hover:text-info-950" : ""
              }`
            : ""
        }
      >
        {children(isContentVisible)}
      </button>
      <PopupContentWrapper origin={origin} active={isContentVisible}>
        {renderContent(() => setIsContentVisible(!isContentVisible))}
      </PopupContentWrapper>
    </div>
  );
};

export { Popup };
