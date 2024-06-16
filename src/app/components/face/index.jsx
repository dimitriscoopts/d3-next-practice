"use client"
import React, {useState, useRef, useEffect } from "react";
import { useDashboardContext } from "@/app/context/dashboardContext";
import * as d3 from 'd3'; // Import everything from D3

// Components
import BackgroundCircle from "./components/BackgroundCircle";
import Eye from "./components/Eye";
import { Mouth } from "./components/Mouth";
import { FaceContainer } from "./components/FaceContainer";

export const Face = ({width, height}) => {
  const svgRef = useRef(null);
  const {userData, setUserData} = useDashboardContext();


  const centerX = width < height ? (width /2) : (height /2);
  const centerY = width < height ? (width /2) : (height /2);
  const strokeWidth = width < height ? (width * 0.02) : (height * 0.02);
  const eyeOffsetX = width < height ? (width * 0.2) : (height * 0.2);
  const eyeOffsetY = width < height ? (width * 0.2) : (height * 0.2);
  const eyeRadius = width < height ? (width * 0.06) : (height * 0.06);
  const mouthWidth = width < height ? (width * 0.03) : (height * 0.03);
  const mouthRadius = width < height ? (width * 0.30) : (height * 0.30);


  const mouthArc = d3.arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3/2)


  return (
    <div className="items-center flex justify-center">
      <FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>
        <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}/>
        <Eye strokeWidth={strokeWidth} eyeOffsetX={eyeOffsetX} eyeOffsetY={-eyeOffsetY} eyeRadius={eyeRadius}/>
        <Eye strokeWidth={strokeWidth} eyeOffsetX={-eyeOffsetX} eyeOffsetY={-eyeOffsetY} eyeRadius={eyeRadius}/>
        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>
      </FaceContainer>
    </div>
  );
};
