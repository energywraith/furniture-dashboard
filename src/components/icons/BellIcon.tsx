import { IconProps } from "./types";

const BellIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
    className={props.className}
  >
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.2"
      d="M18.445 17.604l-3.38.011c-1.96.006-5.17.006-7.13 0l-3.38-.01.504-.763c.69-1.045.882-1.379 1.01-1.783.048-.147.07-.255.085-.708a150.911 150.911 0 00.038-3.033c.013-1.59.02-2.379.054-2.87.033-.482.092-.67.215-1.06l.02-.061c.468-1.492 1.613-2.78 2.996-3.38a6.001 6.001 0 011.364-.385l7.604 14.042zm0 0l-.503-.762c-.69-1.044-.883-1.378-1.012-1.783-.047-.147-.07-.254-.085-.706-.015-.45-.022-1.254-.035-2.797l-.002-.26c-.013-1.578-.02-2.36-.053-2.85-.034-.48-.094-.67-.218-1.064l-.021-.068c-.421-1.342-1.437-2.561-2.685-3.224a5.898 5.898 0 00-1.312-.463l.021-.097-.02.097a5.463 5.463 0 00-.835-.085 5.57 5.57 0 00-.844.02l7.604 14.042zM4.758 7.711l.098.02-.098-.02c-.094.445-.097.578-.12 3.642a147.597 147.597 0 01-.034 2.775c-.014.43-.037.483-.072.563-.02.047-.108.197-.24.408-.13.207-.297.466-.47.726-.413.62-.643.975-.77 1.233-.13.266-.152.431-.152.664 0 .461.157.844.474 1.14h0l.01.009c.093.087.174.161.273.218.106.06.227.098.403.122.34.046.913.046 2.033.046h2.014l.036.17.098-.02-.098.02c.039.182.137.433.256.677.12.244.264.49.398.665.423.55 1.156 1.047 1.83 1.243.205.06.543.088.872.088.33 0 .668-.027.874-.087a3.778 3.778 0 001.817-1.23l-.08-.06.08.06c.139-.177.286-.425.407-.67.12-.246.22-.498.26-.686l-.098-.02.098.02.036-.17h2.014c1.12 0 1.693 0 2.033-.046.176-.024.297-.062.403-.122.1-.057.18-.131.273-.218l.01-.01-.068-.073.068.073c.317-.295.474-.678.474-1.14 0-.232-.022-.397-.152-.663-.127-.258-.357-.614-.77-1.233-.173-.26-.34-.518-.47-.726a5.334 5.334 0 01-.24-.408c-.035-.08-.058-.133-.072-.563-.015-.43-.021-1.224-.033-2.775-.024-3.064-.027-3.197-.121-3.642l-.098.02.098-.02c-.619-2.93-2.644-5.075-5.388-5.689h0c-.253-.056-.688-.096-1.116-.113-.428-.017-.864-.012-1.12.025l.015.099-.014-.099a7.145 7.145 0 00-2.34.8c-1.838 1.05-3.056 2.774-3.52 4.977zm6.457 12.742c-.65-.118-1.231-.586-1.464-1.177l-.093.037.093-.037-.008-.02h3.514l-.008.02.093.037-.093-.037c-.316.801-1.226 1.323-2.034 1.177z"
    ></path>
  </svg>
);

export { BellIcon };
