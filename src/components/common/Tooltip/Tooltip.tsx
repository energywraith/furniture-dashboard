import { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <div>
      <span className="group relative">
        <div className="absolute top-[calc(100%+1.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
          <div className="bottom-full right-0 rounded bg-info-950 px-4 py-3 text-paragraph-2 text-base-white whitespace-nowrap relative">
            {text}
            <svg
              className="absolute left-0 -top-1 h-2 w-full text-info-950"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
            >
              <polygon
                className="fill-current"
                points="127.5,0 0,127.5 255,127.5"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        {children}
      </span>
    </div>
  );
};

export { Tooltip };
