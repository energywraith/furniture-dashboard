import { IconProps } from "./types";

const HamburgerIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 12"
    {...props}
    className={props.className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      d="M1 1h18M1 6h18M1 11h18"
    ></path>
  </svg>
);

export { HamburgerIcon };
