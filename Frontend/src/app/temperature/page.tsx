import Sidebar from "@/components/sidebar";
import { LineGraph } from "@/components/charts/temperature"; //I have no idea why this gets redlined, it works as intended when running though
import axios from "axios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/api/auth/signin");
  }
  const response = await axios.get("http://localhost:8000/dog/getTemperature", {
    headers: {
      Authorization: `Bearer ${session?.jwt}`,
      "Content-Type": "application/json",
    },
    data: {
      start: "2023-01-01 00:00:00",
      end: "2023-12-31 23:00:00",
    },
  });
  let data = response.data;
  //console.log(data);
  data = data.map((item: any) => {
    return {
      name: item.time,
      Temperature: item.temperature,
    };
  });
  //console.log(data);
  return (
    <main className="min-h-screen">
      <Sidebar />
      <div className="bg-white text-black w-[cal(100%-72px)] md:w-[cal(100%-244px)] h-screen overflow-auto ml-[72px] md:ml-[244px]">
        <div className="absolute top-0 right-0 text-elanco p-10">
          <a href="..">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 cursor-pointer">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M20 20L4 4m16 0L4 20" />
            </svg>
          </a>
        </div>
        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">
            Temperature
          </div>
          <div className="text-lg">Let's see how your dog is doing.</div>
        </div>

        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-0">
          Displaying data from the past year:
        </div>
        <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5 ml-2">
          <LineGraph props={data} />
        </div>
      </div>
    </main>
  );
}
