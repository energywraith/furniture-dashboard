import { IconProps } from "./types";

const ShareIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
    className={props.className}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="2"
      d="M4 10.667V10a2 2 0 012-2h6.667m-2 2.667l2.195-2.196a.667.667 0 000-.942l-2.195-2.196"
    ></path>
  </svg>
);

export { ShareIcon };
