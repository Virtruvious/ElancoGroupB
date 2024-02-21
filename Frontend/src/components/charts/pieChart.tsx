"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

interface PieChartGraphProps {
  data: any;
}

const PieChartGraph: React.FC<PieChartGraphProps> = ({ data }) => {
  const [data01, setData01] = useState(data);
  console.log("Data from PieChartGraph: ");
  console.log(data);

  useEffect(() => {
    setData01(data);
  }, [data]);

  var newData = [
    { name: "Normal", value: data.normal },
    { name: "Sleeping", value: data.sleeping },
    { name: "Walking", value: data.walking },
    { name: "Eating", value: data.eating },
    { name: "Playing", value: data.playing },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={newData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Pie
          dataKey="value"
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartGraph;
