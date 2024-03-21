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
import moment from "moment";


export const BarChartGraph = (props: any) => {
  const data = props.props;

  function formatXAxis(tickItem: string) {
    return moment(tickItem).format("MMM Do YY");
  }

  function formatXAxisTooltip(tickItem: string) {
    return moment(tickItem).format("MMMM Do YYYY");
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    label = formatXAxisTooltip(label);
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg bg-white p-2 shadow-lg">
          <p className="text-gray-700 font-light">{`${label}`}</p>
          <p className="text-elanco font-semibold">
            Intake: {`${payload[0].value}`} <span className="font-light">kcal</span>
          </p>
          <p className="text-[#FF8103] font-semibold">
            Burnt: {`${payload[1].value}`} <span className="font-light">kcal</span>
          </p>
        </div>
      );
    }
    return null;
  };

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
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" tickFormatter={formatXAxis} />
      <YAxis />
      <Tooltip content={<CustomTooltip/>} />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="caloriesIntake" fill="#0078BE" stackId="stack" />
      <Bar dataKey="caloriesBurnt" fill="#FF8103" stackId="stack" />
    </BarChart>
    </ResponsiveContainer>
    
  );

}

export default dynamic (() => Promise.resolve(BarChartGraph), {ssr: false})
