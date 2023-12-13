import { HTMLProps, ReactNode } from "react";
import { variants } from "./variants";

interface LabelProps extends HTMLProps<HTMLDivElement> {
  variant?: keyof typeof variants;
}

const Label = ({ variant = "neutral", className, children }: LabelProps) => {
  const boxClasses = `bg-${variants[variant].bg} text-${variants[variant].text}`;
  const circleClasses = `bg-${variants[variant].text}`;

  return (
    <div
      className={`flex items-center justify-center gap-x-1 text-body-xs font-medium py-0.5 px-2 w-fit rounded-[4px] ${boxClasses} ${
        className || ""
      }`}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${circleClasses}`}></div>
      {children}
    </div>
  );
};

export default Label;
