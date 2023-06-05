import * as React from "react";
const SecureIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={42}
      height={42}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M0 0h42v42H0V0Z" />
    </mask>
    <g stroke="#9E7889" strokeMiterlimit={10} strokeWidth={2.5} mask="url(#a)">
      <path d="M37.584 11.432c-.02-.454-.032-.9-.039-1.34a3.199 3.199 0 0 0-3.023-3.144c-5.13-.287-9.141-1.993-12.53-5.296a1.458 1.458 0 0 0-1.984 0c-3.388 3.303-7.4 5.01-12.529 5.296a3.199 3.199 0 0 0-3.023 3.143c-.007.441-.019.887-.04 1.341-.188 9.899-.47 23.464 15.993 29.205a1.782 1.782 0 0 0 1.183 0c16.416-5.741 16.18-19.26 15.992-29.205Z" />
      <path d="M30.22 21a9.221 9.221 0 1 1-18.441 0 9.221 9.221 0 0 1 18.442 0Z" />
      <path
        strokeLinecap="round"
        d="m24.874 18.625-5.725 5.725M16.962 22.162l2.188 2.188"
      />
    </g>
  </svg>
);
export default SecureIcon;
