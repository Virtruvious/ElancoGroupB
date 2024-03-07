"use client";
import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const PieChartGraph: React.FC<any> = ({ data }) => {
  let total =
    data.normal + data.sleeping + data.walking + data.eating + data.playing;
  let newData = [
    { name: "Normal", value: (data.normal / total) * 100 },
    { name: "Sleeping", value: (data.sleeping / total) * 100 },
    { name: "Walking", value: (data.walking / total) * 100 },
    { name: "Eating", value: (data.eating / total) * 100 },
    { name: "Playing", value: (data.playing / total) * 100 },
  ];

  // Hex codes for the pie chart, Elanco blue in 20% darker increments
  let colors = ["#4b77b9", "#3c5f94", "#2d476f", "#1e304a", "#0f1825"];

  const customTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white rounded-lg p-2">
          <p className="text-elanco">
            {`${payload[0].name} : ${payload[0].value.toFixed(2)}%`}
          </p>
        </div>
      );
    }

    return null;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={newData}
          cx="50%"
          cy="50%"
          labelLine={false}
          // outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
          
        >
          {newData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={customTooltip} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartGraph;
