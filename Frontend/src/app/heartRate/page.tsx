'use client'
import "./styles.css";
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


export default function BPM() {

  const data = [
    {
      name: "Day 1", //Edit the name to change the X axis
      BeatsPerMinute: 4000,
    },
    {
      name: "Day 2",
      BeatsPerMinute: 3000,
    },
    {
      name: "Day 3",
      BeatsPerMinute: 2000,
    },
    {
      name: "Day 4",
      BeatsPerMinute: 2780,
    },
    {
      name: "Day 5",
      BeatsPerMinute: 1890,
    },
    {
      name: "Day 6",
      BeatsPerMinute: 2390,
    },
    {
      name: "Day 7",
      BeatsPerMinute: 3490,
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
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
      <Line type="monotone" dataKey="BeatsPerMinute" stroke="#0078BE" /> //Edit the data key to change the line name
    </LineChart>
    </ResponsiveContainer>
  );
}

//For examples on how to implement graphs, visit https://recharts.org/en-US/examples