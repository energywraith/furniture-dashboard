import { IconProps } from "./types";

const DownloadIcon = (props: IconProps) => (
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
      d="M8 2.667v6m2.667-2L8.47 8.862a.667.667 0 01-.942 0L5.333 6.667m8 6.666H2.667"
    ></path>
  </svg>
);

export { DownloadIcon };
