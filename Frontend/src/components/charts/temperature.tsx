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
      Temperature: 28, //Edit this name and the dataKey below to change the line name
    },                 //Edit the value to change the Y axis
    {
      name: "Day 2",
      Temperature: 26,
    },
    {
      name: "Day 3",
      Temperature: 24,
    },
    {
      name: "Day 4",
      Temperature: 29,
    },
    {
      name: "Day 5",
      Temperature: 25,
    },
    {
      name: "Day 6",
      Temperature: 26,
    },
    {
      name: "Day 7",
      Temperature: 29,
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
      <Line type="monotone" dataKey="Temperature" stroke="#0078BE" /> //Edit the data key to change the line name
    </LineChart>
    </ResponsiveContainer>
  );
}

//For examples on how to implement graphs, visit https://recharts.org/en-US/examples