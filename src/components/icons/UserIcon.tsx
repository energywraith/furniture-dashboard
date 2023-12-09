import { IconProps } from "./types";

const UserIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={props.className}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      d="M16.3 6.65v0a4.65 4.65 0 10-4.65 4.65v-.15.15a4.655 4.655 0 004.65-4.65zM9.928 4.072a3.1 3.1 0 113.444 5.156 3.1 3.1 0 01-3.444-5.156zM3 19.451v1.566a.785.785 0 00.78.783.778.778 0 00.78-.783v-1.565s0 0 0 0a4.403 4.403 0 011.278-3.1 4.351 4.351 0 013.08-1.286h5.463a4.351 4.351 0 013.081 1.286 4.403 4.403 0 011.279 3.1v1.565a.785.785 0 00.78.783.778.778 0 00.779-.783V19.45v0a5.975 5.975 0 00-1.736-4.206 5.909 5.909 0 00-4.183-1.745h0-5.462 0a5.909 5.909 0 00-4.184 1.745A5.975 5.975 0 003 19.451z"
    ></path>
  </svg>
);

export { UserIcon };
