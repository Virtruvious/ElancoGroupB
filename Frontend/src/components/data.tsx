import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import axios from "axios";
import { json } from "stream/consumers";

export default async function Home(req: NextRequest): Promise<any> {
  try {
    let token: string;
    const session = await getServerSession(authOptions);
    if (session === null) {
      redirect("/api/auth/signin");
    }
    const names = ["Heart Rate", "Calorie Burnt", "Temperature"];
    const response = await axios.get("/dog/getDashInfo", {
      params: {
        user: session?.user,
        token: session?.jwt,
      },
    });
    token = session?.jwt;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: token,
    };

    const reponse = await axios.post(
      "http://localhost:8000/dog/getDashInfo",
      bodyParameters,
      config
    );
    const data = json(response.data);
    console.log("Data from API: ");
    console.log("78");
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // You can return any value you want in case of an error, or throw an error if you want to handle it differently
  }
}
