import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";
import PieChartGraph from "@/components/charts/pieChart";
import axios from "axios";
import { DashboardDisplays } from "@/components/displays";

export default async function Home(req: NextRequest): Promise<any> {
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/api/auth/signin");
  }

  const response = await axios.get("http://localhost:8000/dog/getDashInfo", {
    headers: {
      Authorization: `Bearer ${session?.jwt}`,
      "Content-Type": "application/json",
    },
  });

  const data = response.data;
  let collection = [
    {
      title: "Heart Rate",
      average: data.bpm.average,
      max: data.bpm.max,
      min: data.bpm.min,
      href: "/heartRate",
      units: "BPM",
    },
    {
      title: "Calorie Burnt",
      average: data.caloriesBurnt.average,
      max: data.caloriesBurnt.max,
      min: data.caloriesBurnt.min,
      href: "/caloriesBurnt",
      units: "Kcal",
    },
    {
      title: "Temperature",
      average: data.temperature.average,
      max: data.temperature.max,
      min: data.temperature.min,
      href: "/temperature",
      units: "°C",
    },
    {
      title: "Steps",
      average: data.steps.average,
      max: data.steps.max,
      min: data.steps.min,
      href: "/steps",
      units: "",
    },
    {
      title: "Calories Intake",
      average: data.carloriesIntake.average,
      max: data.carloriesIntake.max,
      min: data.carloriesIntake.min,
      href: "/foodIntake",
      units: "Kcal",
    },
    {
      title: "Water",
      average: data.water.average,
      max: data.water.max,
      min: data.water.min,
      href: "/waterIntake",
      units: "ml",
    },
  ];

  let highestBehaviour;
  let highest = -Infinity;
  for (let key in data.behaviour) {
    if (data.behaviour[key] > highest && key !== "sleeping") {
      highest = data.behaviour[key];
      highestBehaviour = key;
    }
  }

  switch (highestBehaviour?.toLowerCase()) {
    case "normal":
      highestBehaviour = data.dogInfo.name + " seems to spend a lot of time relaxing!";
      break;
    case "walking":
      highestBehaviour = data.dogInfo.name + " definitely gets their steps in!";
      break;
    case "eating":
      highestBehaviour = data.dogInfo.name + " has quite the appetite!";
      break;
    case "playing":
      highestBehaviour = data.dogInfo.name + " seems to have unlimited energy!";
      break;
  }
  
  return (
    <main className="min-h-screen">
      <Sidebar />
      <div className="bg-white text-black w-[cal(100%-72px)] md:w-[cal(100%-244px)] h-screen overflow-auto ml-[72px] md:ml-[244px]">
        <div className="mx-1 md:mx-3 xl:mx-5 p-2 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">
            Hello {session.user.name}!
          </div>
          <div className="text-lg">Let's see how {data.dogInfo.name} is doing today!</div>
        </div>

        <div className="font-extralight mx-1 md:mx-3 xl:mx-5 p-2 pb-0">
          Displaying data from the previous year.
        </div>
        <DashboardDisplays props={collection} />
        <a href="../behaviour"
        className=" text-center
                    grid grid-cols-1 lg:grid-cols-8 gap-y-3
                    m-1 md:m-3 xl:m-5 p-2 md:p-5 xl:p-7
                    border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl outline-elanco
                    transition ease-in-out duration-300"
      >
        <div className="font-bold lg:text-end text-elanco text-2xl md:text-3xl lg:text-5xl col-span-3 self-end">
          Behaviour
        </div>
        <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5 ml-2">
          <PieChartGraph data={data.behaviour}  />
        </div>
        <div className="text-base lg:text-end col-span-3">{highestBehaviour}</div>
      </a>
      </div>
    </main>
  );
}
