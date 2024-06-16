"use client"
import React, { memo, useEffect, useState, useCallback } from 'react'

function DotFollow() {
  const width = 960;
  const height = 500;
  const circleRadius = 30;
  
  const [mousePosition, setMousePosition] = useState({
    x: width / 2,
    y: height / 2
  });


  const handleMouseMove = useCallback(
    ({clientX, clientY}) => {
      setMousePosition(prev => {
        return {
          ...prev,
          x: clientX,
          y: clientY - 60,
        }
  
      })
    }, [setMousePosition]
  )

  return (
   <svg width={width} height={height} onMouseMove={handleMouseMove}>
    <circle
      cx={mousePosition.x}
      cy={mousePosition.y}
      r={circleRadius}
    />
   </svg>
  )
}


export default memo(DotFollow);