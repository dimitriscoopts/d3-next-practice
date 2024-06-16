import React from "react";

export default function BackgroundCircle({radius, strokeWidth}) {
  return (
    <circle
      cx={`0`}
      cy={`0`}
      r={radius}
      fill="yellow"
      stroke="black"
      stroke-width={strokeWidth}
    />
  );
}
