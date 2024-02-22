import Sidebar from "@/components/sidebar";
import { LineGraph } from "@/components/charts/weightFixed"; //I have no idea why this gets redlined, it works as intended when running though
import axios from "axios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  let token: string;
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/api/auth/signin");
  }
  const response = await axios.get("http://localhost:8000/dog/getWeight", {
    headers: {
      Authorization: `Bearer ${session?.jwt}`,
      "Content-Type": "application/json",
    },
    data: {
      start: "2023-01-01 00:00:00",
      end: "2023-12-31 23:00:00",
    },
  });
  token = session?.jwt;
  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white w-full text-black h-screen overflow-auto">
        <div className="absolute top-0 right-0 text-elanco p-10">
          <a href="..">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 cursor-pointer">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M20 20L4 4m16 0L4 20" />
            </svg>
          </a>
        </div>
        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">
            Weight
          </div>
          <div className="text-lg">Let's see how your dog is doing.</div>
        </div>

        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-0">
          Displaying data from the past year:
        </div>
        <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5 ml-2">
          <LineGraph props={response.data} />
        </div>
      </div>
    </main>
  );
}
