import * as React from "react"
const FacebookIcon = (props) => (
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
        <use xlinkHref="#b" transform="scale(.00268)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={373}
        height={373}
      />
    </defs>
  </svg>
)
export default FacebookIcon ;