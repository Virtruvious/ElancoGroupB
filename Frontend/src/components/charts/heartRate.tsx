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
import moment from "moment";

export default function LineGraph() {

  const data = [
    {
      name: "Day 1", //Edit the name to change the X axis
      BeatsPerMinute: 4000, //Edit this name and the dataKey below to change the name of the line
    },                      //Edit the value to change the Y axis
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

  function formatXAxisTooltip(tickItem:string) {
    return moment(tickItem).format('MMMM Do YYYY')
  }

  function formatXAxis(tickItem:string) {
    return moment(tickItem).format('MMMM Do YY')
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    label = formatXAxisTooltip(label);
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}  : ${payload[0].value} KGs`}</p>
        </div>
      );
    }
  
    return null;
  };
  

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
      <YAxis type="number" domain={[0, 5000]}/>
      <Tooltip 
      content={<CustomTooltip  />} 
      />
      <Legend />
      <Line type="monotone" dataKey="BeatsPerMinute" stroke="#0078BE" dot={false} /> //Edit the data key to change the line name
    </LineChart>
    </ResponsiveContainer>
  );
}

//For examples on how to implement graphs, visit https://recharts.org/en-US/examples