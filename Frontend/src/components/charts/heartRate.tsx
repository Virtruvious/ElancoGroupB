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

type props = {
  props: [{}];
};

export const LineGraph = (props: props) => {
  let realData = props.props;

  function formatXAxis(tickItem: string) {
    return moment(tickItem).format("MMM Do YY");
  }

  function formatXAxisTooltip(tickItem: string) {
    return moment(tickItem).format("MMMM Do YYYY HH:mm:ss");
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    label = formatXAxisTooltip(label);
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg bg-white p-2 shadow-lg">
          <p className="text-gray-700 font-light">{`${label}`}</p>
          <p className="text-elanco font-semibold">
            {`${payload[0].value}`} <span className="font-light">bpm</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="80%" minWidth={300} minHeight={180}>
      <LineChart
        data={realData}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tickFormatter={formatXAxis} />
        <YAxis type="number" domain={[90, 140]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="bpm"
          stroke="#0078BE"
          dot={false}
        />{" "}
      </LineChart>
    </ResponsiveContainer>
  );
};
