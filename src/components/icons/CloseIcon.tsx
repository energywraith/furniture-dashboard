import { IconProps } from "./types";

const CloseIcon = (props: IconProps) => (
  <svg viewBox="0 0 30 30" {...props} className={props.className}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.537 9.251a.857.857 0 111.212 1.212L16.212 15l4.537 4.537a.857.857 0 11-1.212 1.212L15 16.212l-4.537 4.537a.857.857 0 11-1.212-1.212L13.788 15 9.25 10.463a.857.857 0 111.212-1.212L15 13.788l4.537-4.537z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export { CloseIcon };
