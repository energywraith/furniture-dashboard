import { IconProps } from "./types";

const MoreIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={props.className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M11.625 11.625h.75m-.75.75h.75m-7.75-.75h.75m-.75.75h.75m13.25-.75h.75m-.75.75h.75M13 12a1 1 0 11-2 0 1 1 0 012 0zm-7 0a1 1 0 11-2 0 1 1 0 012 0zm14 0a1 1 0 11-2 0 1 1 0 012 0z"
    ></path>
  </svg>
);

export { MoreIcon };
