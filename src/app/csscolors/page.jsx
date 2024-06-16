"use client";

import React, { useEffect, useState } from "react";
import { csvParse, csv, arc, csvFormat, pie } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/jimmygian/2082e3abc959b7dce9bc743e4c8bde47/raw/cssNamedColors.csv";

export default function CssColors() {
  const [data, setData] = useState(null);
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;

  useEffect(() => {
    csv(csvUrl).then((data) => {
      console.log("Fetching Data");
      setData(data);
    });
  }, []);

  const colorPie = pie().value(1)

  const pieArc = arc().innerRadius(0).outerRadius(width);

  return (
    <div>
      {data ? (
        <svg width={width} height={height}>
          <g transform={`translate(${centerX}, ${centerY})`}>
            {/* {data.map((d, index) => (
              <path
                fill={d["RGB hex value"]}
                d={pieArc({
                  startAngle: (index / data.length) * 2 * Math.PI,
                  endAngle: ((index + 1) / data.length) * 2 * Math.PI,
                })}
              />
            ))} */}
            {
              colorPie(data).map(d => (
                <path fill={d.data['RGB hex value']} d={pieArc(d)}/>
              ))
            }
          </g>
        </svg>
      ) : (
        <pre>Loading...</pre>
      )}
    </div>
  );
}
