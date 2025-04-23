import * as React from "react";
import { JSX } from "react/jsx-runtime";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    height={size || height}
    viewBox="0 0 100 100"
    width={size || height}
    {...props}
  >
    <path d="M77.38,39.67,75.93,23.34a4.75,4.75,0,0,0-7.83-3.19l-7.52,6.48a27.52,27.52,0,0,0-7.25-1H46.67a27.67,27.67,0,0,0-7.27,1l-4.48-5.89a4.4,4.4,0,0,0-7.87,2.14L25.56,35.47A27.65,27.65,0,0,0,46.67,81h6.66a27.65,27.65,0,0,0,24-41.33Zm-8-18A2.74,2.74,0,0,1,71.18,21a2.84,2.84,0,0,1,1.06.2,2.71,2.71,0,0,1,1.7,2.31l1.13,12.73a27.81,27.81,0,0,0-12.25-8.9ZM29,23.13A2.39,2.39,0,0,1,33.33,22l4,5.31a27.9,27.9,0,0,0-9.51,5.79ZM53.33,79H46.67a25.67,25.67,0,0,1,0-51.34h6.66a25.67,25.67,0,0,1,0,51.34Zm-.16-18h2a4.35,4.35,0,0,1-4.34,4.34H36.67v-2h4V60.86C39.31,60.45,38,59.18,37,57.05h0c-.63-1.3-.18-3.52.71-3.52h8c.9,0,1.34,2.22.71,3.52h0c-1,2.14-2.35,3.4-3.7,3.81v2.51h8.16A2.34,2.34,0,0,0,53.17,61ZM37.08,39.62h-7.5a6,6,0,1,0,0,12h7.5a6,6,0,0,0,0-12Zm-4.5,10h-3a4,4,0,1,1,0-8h3a6,6,0,0,0,0,8Zm32-10h-7.5a6,6,0,0,0,0,12h7.5a6,6,0,0,0,0-12Zm-4.5,10h-3a4,4,0,0,1,0-8h3a6,6,0,0,0,0,8Z" />
  </svg>
);

export const EditIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};
