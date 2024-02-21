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
      CaloriesCalories: 4000, //Edit this name and the dataKey below to change the line name
    },                        //Edit the value to change the Y axis
    {
      name: "Day 2",
      Calories: 3000,
    },
    {
      name: "Day 3",
      Calories: 2000,
    },
    {
      name: "Day 4",
      Calories: 2780,
    },
    {
      name: "Day 5",
      Calories: 1890,
    },
    {
      name: "Day 6",
      Calories: 2390,
    },
    {
      name: "Day 7",
      Calories: 3490,
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
      <Line type="monotone" dataKey="Calories" stroke="#0078BE" /> //Edit the data key to change the line name
    </LineChart>
    </ResponsiveContainer>
  );
}

//For examples on how to implement graphs, visit https://recharts.org/en-US/examples