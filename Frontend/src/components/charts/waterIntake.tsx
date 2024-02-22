'use client'
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer
} from "recharts";

import dynamic from "next/dynamic";


export function BarChartGraph() {
  const data = [
    {
      name: "Day 1",
      Intake: 1200,
      Outtake: -1000,
    },
    {
      name: "Day 2",
      Intake: 3000,
      Outtake: -1398,
    },
    {
      name: "Day 3",
      Intake: 2000,
      Outtake: -9800,
    },
    {
      name: "Day 4",
      Intake: 2780,
      Outtake: -3908,
    },
    {
      name: "Day 5",
      Intake: 1890,
      Outtake: -4800,
    },
    {
      name: "Day 6",
      Intake: 2390,
      Outtake: -3800,
    },
    {
      name: "Day 7",
      Intake: 3490,
      Outtake: -4300,
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="80%">
    <BarChart
      width={900}
      height={400}
      data={data}
      stackOffset="sign"
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="Intake" fill="#8884d8" stackId="stack" />
      <Bar dataKey="Outtake" fill="#82ca9d" stackId="stack" />
    </BarChart>
    </ResponsiveContainer>
    
  );

}

export default dynamic (() => Promise.resolve(BarChartGraph), {ssr: false})
