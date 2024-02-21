'use client'
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


export default function LineGraph() {

  const data = [
    {
      name: "Day 1", //Edit the name to change the X axis
      Weight: 4000, //Edit this name and the data key to change the line name
    },                      //Edit the value to change the Y axis
    {
      name: "Day 2",
      Weight: 3000,
    },
    {
      name: "Day 3",
      Weight: 2000,
    },
    {
      name: "Day 4",
      Weight: 2780,
    },
    {
      name: "Day 5",
      Weight: 1890,
    },
    {
      name: "Day 6",
      Weight: 2390,
    },
    {
      name: "Day 7",
      Weight: 3490,
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="80%">
    <LineChart
      data={data}
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
      <Line type="monotone" dataKey="Weight" stroke="#0078BE" /> //Edit the data key to change the line name
    </LineChart>                                                        
    </ResponsiveContainer>
  );
}

//For examples on how to implement graphs, visit https://recharts.org/en-US/examples