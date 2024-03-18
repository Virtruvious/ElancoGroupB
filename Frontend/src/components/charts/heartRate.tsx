"use client";
import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const LineGraph = (props: any) => {
  let data = props.props;
  //console.log(data);
  function formatXAxis(tickItem: string) {
    return moment(tickItem).format("MMMM Do YY");
  }

  function formatXAxisTooltip(tickItem: string) {
    return moment(tickItem).format("MMMM Do YYYY HH:mm:ss");
  }
  const CustomTooltip = ({ active, payload, label }: any) => {
    label = formatXAxisTooltip(label);
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg bg-white p-2 shadow-lg">
          <p className="text-gray-700 font-semibold">Date: {`${label}`}</p>
          <p className="text-gray-700 font-semibold">
            BPM: {`${payload[0].value} `}
          </p>
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
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickFormatter={formatXAxis} />
        <YAxis type="number" domain={[90, 150]} />
        <Tooltip
        content={CustomTooltip}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="BeatsPerMinute"
          stroke="#0078BE"
          dot={false}
        />{" "}
        //Edit the data key to change the line name
      </LineChart>
    </ResponsiveContainer>
  );
};

//For examples on how to implement graphs, visit https://recharts.org/en-US/examples
