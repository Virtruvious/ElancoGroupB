import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import axios from "axios";

export default async function Home(req: NextRequest): Promise<any> {
  let messge = "Hello";

  let token: string;
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/api/auth/signin");
  }
  const names = ["Heart Rate", "Calorie Burnt", "Temperature"];
  const response = await axios.get("http://localhost:8000/dog/getDashInfo", {
    headers: {
      Authorization: `Bearer ${session?.jwt}`,
      "Content-Type": "application/json",
    },
  });
  token = session?.jwt;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    key: token,
  };
  const reponse = axios.get("http://localhost:8000/dog/getDashInfo", {
    headers: { Authorization: `Bearer ${session.jwt}` },
  });
  const data = response.data;
  var HBR: { [id: string]: number } = {};
  HBR["average"] = data.bpm.average;
  HBR["max"] = data.bpm.max;
  HBR["min"] = data.bpm.min;
  var CB: { [id: string]: number } = {};
  CB["average"] = data.caloriesBurnt.average;
  CB["max"] = data.caloriesBurnt.max;
  CB["min"] = data.caloriesBurnt.min;
  var T: { [id: string]: number } = {};
  T["average"] = data.temperature.average;
  T["max"] = data.temperature.max;
  T["min"] = data.temperature.min;
  var S: { [id: string]: number } = {};
  S["average"] = data.steps.average;
  S["max"] = data.steps.max;
  S["min"] = data.steps.min;
  var CI: { [id: string]: number } = {};
  CI["average"] = data.carloriesIntake.average;
  CI["max"] = data.carloriesIntake.max;
  CI["min"] = data.carloriesIntake.min;
  let collection = [];
  collection.push(HBR);
  collection.push(CB);
  collection.push(T);
  collection.push(S);
  collection.push(CI);
  console.log("Data from API: ");
  console.log("78");
  return (
    <div>
      <h1>Home</h1>
      <p>Data from API:</p>
      <p>Heart Rate: {HBR["average"]}</p>
      <p>Calorie Burnt: {CB["average"]}</p>
      <p>Temperature: {T["average"]}</p>
      <p>Sleep: {S["average"]}</p>
      <p>Calories Intake: {CI["average"]}</p>
    </div>
  );
}
