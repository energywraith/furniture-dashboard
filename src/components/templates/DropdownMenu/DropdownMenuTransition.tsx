import { ReactNode } from "react";

interface DropdownMenuTransitionProps {
  active: boolean;
  children: ReactNode;
}

const DropdownMenuTransition = ({
  active,
  children,
}: DropdownMenuTransitionProps) => {
  return (
    <div
      className={`absolute right-0 z-10 transition-opacity origin-top-right ${
        active ? "opacity-1" : "opacity-0 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
};

export { DropdownMenuTransition };
