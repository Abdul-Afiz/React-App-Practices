import * as React from "react";
import { SVGProps } from "react";

const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#D0D6F9" d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
  </svg>
);

export default Hamburger;
