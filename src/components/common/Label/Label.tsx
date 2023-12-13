import { HTMLProps, ReactNode } from "react";
import { variants } from "./variants";

interface LabelProps extends HTMLProps<HTMLDivElement> {
  variant?: keyof typeof variants;
}

const Label = ({ variant = "neutral", className, children }: LabelProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-x-1 text-body-xs font-medium py-0.5 px-2 w-fit rounded-[4px] ${
        variants[variant]?.box
      } ${className || ""}`}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${variants[variant]?.circle}`}
      ></div>
      {children}
    </div>
  );
};

export default Label;
