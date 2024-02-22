"use client";
import React from "react";
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
import moment from "moment";

export const LineGraph = (props: any) => {
  let realData = props.props;

  function formatXAxis(tickItem: string) {
    return moment(tickItem).format("MMMM Do YY");
  }

  function formatXAxisTooltip(tickItem: string) {
    return moment(tickItem).format("MMMM Do YYYY");
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
        data={realData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tickFormatter={formatXAxis} />
        <YAxis type="number" domain={[7, 8]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#0078BE"
          dot={false}
        />{" "}
        //Edit the data key to change the line name
      </LineChart>
    </ResponsiveContainer>
  );
};

//For examples on how to implement graphs, visit https://recharts.org/en-US/examples
