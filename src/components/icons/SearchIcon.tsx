import { IconProps } from "./types";

const SearchIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
    className={props.className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M14.444 19.889a5.444 5.444 0 100-10.889 5.444 5.444 0 000 10.889zM22.5 22.5l-4.027-3.875"
    ></path>
  </svg>
);

export { SearchIcon };
