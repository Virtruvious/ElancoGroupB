"use client";
import BarChartGraph from "@/components/charts/foodIntake";
import ChartBody from "@/components/charts/chartBody";
import { ChartRequest } from "@/components/charts/chartRequest";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [start, setStart] = useState("2023-12-01");
  const [end, setEnd] = useState("2023-12-31");
  const title = "Calories";

  async function fetchData() {
    const chartData = await ChartRequest(start, end, title);
    setData(chartData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ChartBody title={title} graph={BarChartGraph} data={data} start={start} end={end} setStart={setStart} setEnd={setEnd} submit={fetchData} />
    </div>
  );
}
