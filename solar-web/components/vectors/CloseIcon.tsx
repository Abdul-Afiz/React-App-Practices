import * as React from "react";
import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#D0D6F9" d="m2.575.954 16.97 16.97-2.12 2.122L.453 3.076z" />
    <path fill="#D0D6F9" d="M.454 17.925 17.424.955l2.122 2.12-16.97 16.971z" />
  </svg>
);

export default CloseIcon;
