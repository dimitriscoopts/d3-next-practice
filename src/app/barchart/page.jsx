"use client";

import React, { useEffect, useState } from "react";
import { csv, scaleBand, scaleLinear, max } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/UN_Population_2019.csv";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

export default function Barchart() {
  const [data, setData] = useState(null);
  const [scale, setScale] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"];
      return d;
    };

    csv(csvUrl, row).then((data) => {
      console.log("Fetching Data");

      setData(data.slice(0, 10));

      setScale({
        y: scaleBand()
          .domain(data.slice(0, 10).map((d) => d.Country))
          .range([0, innerHeight]),
        x: scaleLinear()
          .domain([0, max(data.slice(0, 10), (d) => d.Population)])
          .range([0, innerWidth]),
      });
    });
  }, []);

  // console.log(data);

  // const yScale = scaleBand()
  //   .domain(data.map((d) => d.Country))
  //   .range([0, innerHeight]);

  // const xScale = scaleLinear()
  //   .domain([0, max(data, (d) => d.Population)])
  //   .range([0, innerWidth]);

  return (
    <div>
      {data ? (
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {scale.x.ticks().map((tickValue, i) => (
              <g transform={`translate(${scale.x(tickValue)}, 0)`}>
                <line y2={innerHeight} stroke="black" />
                <text
                  style={{ textAnchor: "middle" }}
                  dy={".71em"}
                  y={innerHeight + 3}
                >
                  {tickValue}
                </text>
              </g>
            ))}
            {data.map((d, i) => (
              <rect
                key={`${d.Country}-${i}`}
                x={0}
                y={scale.y(d.Country)}
                width={scale.x(d.Population)}
                height={scale.y.bandwidth()}
              />
            ))}
            {scale.y.domain().map((tickValue, i) => (
              <g>
                <text
                  x={-3}
                  y={scale.y(tickValue) + scale.y.bandwidth() / 2}
                  style={{ textAnchor: "end" }}
                  dy=".32em"
                >
                  {tickValue}
                </text>
              </g>
            ))}
            {data.map((d, i) => (
              <rect
                key={i}
                x={0}
                y={scale.y(d.Country)}
                width={scale.x(d.Population)}
                height={scale.y.bandwidth()}
              />
            ))}
          </g>
        </svg>
      ) : (
        <pre>Loading...</pre>
      )}
    </div>
  );
}
