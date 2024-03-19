'use client'
import { useState, useEffect } from "react";
import { ChartRequest } from "@/components/charts/chartRequest";
import ChartBody from "@/components/charts/chartBody";
import { LineGraph } from "@/components/charts/weightFixed";

export default function Home() {
  const [data, setData] = useState(null);
  const [start, setStart] = useState("2023-01-01");
  const [end, setEnd] = useState("2023-12-31");
  const title = "Weight";

  async function fetchData() {
    const chartData = await ChartRequest(start, end, title);
    setData(chartData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ChartBody title={title} graph={LineGraph} data={data} start={start} end={end} setStart={setStart} setEnd={setEnd} submit={fetchData} />
    </div>
  );
}
