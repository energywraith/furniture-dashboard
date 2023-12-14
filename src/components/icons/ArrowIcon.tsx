import { IconProps } from "./types";

interface ArrowProps extends IconProps {
  direction?: "left" | "right";
}

const ArrowIcon = (props: ArrowProps) => {
  const d =
    props.direction === "right"
      ? "M3.61 8h8.666m-3.333 4l3.528-3.529a.667.667 0 000-.942L8.943 4"
      : "M12.667 8H4m3.333-4L3.805 7.529a.667.667 0 000 .942L7.333 12";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
      className={props.className}
    >
      <path
        stroke={"currentColor"}
        strokeLinecap="round"
        strokeWidth="1.67"
        d={d}
      ></path>
    </svg>
  );
};

export { ArrowIcon };

// left: d="M12.667 8H4m3.333-4L3.805 7.529a.667.667 0 000 .942L7.333 12"
// right: d="M3.61 8h8.666m-3.333 4l3.528-3.529a.667.667 0 000-.942L8.943 4"
