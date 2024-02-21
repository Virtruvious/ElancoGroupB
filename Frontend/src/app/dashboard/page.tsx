import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import style from "@/app/design-framework/data/overview/style.module.css";
import Sidebar from "@/components/sidebar";
import BPM from "@/components/charts/heartRate";
import PieChartGraph from "@/components/charts/pieChart";
import axios from "axios";
import { DashboardDisplays } from "@/components/displays";

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
  var collection = [
    {
      title: "Heart Rate",
      average: data.bpm.average,
      max: data.bpm.max,
      min: data.bpm.min,
    },
    {
      title: "Calorie Burnt",
      average: data.caloriesBurnt.average,
      max: data.caloriesBurnt.max,
      min: data.caloriesBurnt.min,
    },
    {
      title: "Temperature",
      average: data.temperature.average,
      max: data.temperature.max,
      min: data.temperature.min,
    },
    {
      title: "Steps",
      average: data.steps.average,
      max: data.steps.max,
      min: data.steps.min,
    },
    {
      title: "Calories Intake",
      average: data.carloriesIntake.average,
      max: data.carloriesIntake.max,
      min: data.carloriesIntake.min,
    },
    {
      title: "Water",
      average: data.water.average,
      max: data.water.max,
      min: data.water.min,
    },
  ];
  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white w-full text-black h-screen overflow-auto">
        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">
            Hello! User
          </div>
          <div className="text-lg">Let's see how your dog doing.</div>
        </div>

        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-0">
          Displaying data from the previous year.
        </div>
        <DashboardDisplays props={collection} />
        <div
        className="col-span-full text-center
                    grid grid-cols-1 lg:grid-cols-8 gap-y-3
                    m-1 md:m-3 xl:m-5 p-2 md:p-5 xl:p-7
                    border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl
                    transition ease-in-out duration-300"
      >
        <div className="font-bold lg:text-end text-elanco text-2xl md:text-3xl lg:text-5xl col-span-3 self-end">
          Behaviour
        </div>
        <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5 ml-2">
          <PieChartGraph data={data.behaviour}  />
        </div>
        <div className="text-base lg:text-end col-span-3">Description</div>
      </div>
      </div>
    </main>
  );
}
