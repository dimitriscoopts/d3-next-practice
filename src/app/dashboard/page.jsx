"use client";

import { useState } from "react";
import { Face } from "../components/face";
import { DashboardContextProvider } from "@/app/context/dashboardContext";
import { range } from "d3";

export default function Dashboard() {
  
  const [svgDimentions, setSvgDimentions] = useState({
    width: 200,
    height: 200,
  })

  const array = range(48);

  return (
    <DashboardContextProvider>
      <main className="min-h-[90vh] items-center flex flex-wrap">
          {array.map(() => (
            <Face width={svgDimentions.width} height={svgDimentions.height}/>
          ))}
      </main>
    </DashboardContextProvider>
  );
};
