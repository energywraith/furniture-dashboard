import { ReactNode } from "react";

interface PopupContentWrapperProps {
  active: boolean;
  children: ReactNode;
  origin?: "center" | "right";
}

const PopupContentWrapper = ({
  active,
  children,
  origin,
}: PopupContentWrapperProps) => {
  const originClassnames =
    origin === "center"
      ? "left-[50%] -translate-x-1/2 origin-center"
      : "right-0 origin-top-right";

  return (
    <div
      className={`absolute z-10 transition-opacity mt-3 ${originClassnames} ${
        active ? "opacity-1" : "opacity-0 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
};

export { PopupContentWrapper };
