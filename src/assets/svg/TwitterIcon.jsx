import * as React from "react"
export const TwitterIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h12v12H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00242)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={414}
        height={414}
      />
    </defs>
  </svg>
)

