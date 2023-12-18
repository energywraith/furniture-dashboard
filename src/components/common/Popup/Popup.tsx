import { ReactNode, useRef, useState } from "react";
import { PopupContentWrapper } from "./PopupContentWrapper";
import { useClickOutside } from "@/hooks/useClickOutside";

export interface PopupRenderProps {
  isContentVisible: boolean;
  onClosePopup: () => void;
}
interface PopupProps {
  renderContent: (props: PopupRenderProps) => ReactNode;
  children: (props: PopupRenderProps) => ReactNode;
  origin?: "center" | "right";
  className?: string;
  isIcon?: boolean;
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

  const renderProps: PopupRenderProps = {
    isContentVisible,
    onClosePopup: () => setIsContentVisible(!isContentVisible),
  };

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
        {children(renderProps)}
      </button>
      <PopupContentWrapper origin={origin} active={isContentVisible}>
        {renderContent(renderProps)}
      </PopupContentWrapper>
    </div>
  );
};

export { Popup };
