import React from "react";

export default function Eye({eyeOffsetX, eyeOffsetY, strokeWidth, eyeRadius}) {
  return (
    <circle
      cx={eyeOffsetX}
      cy={eyeOffsetY}
      r={eyeRadius}
      fill="black"
      stroke="black"
      stroke-width={strokeWidth}
    />
  );
}
