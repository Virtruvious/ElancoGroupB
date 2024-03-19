// ChartRequest.js (server-side component)
"use server";
import axios from "axios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function ChartRequest(start: string, end: string, type: string) {
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/login");
  }
  const url = "http://localhost:8000/dog/get" + type;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${session.jwt}`,
      "Content-Type": "application/json",
    },
    params: {
      start: start + " 00:00:00",
      end: end + " 23:00:00",
    },
  });
  return response.data; // Return the fetched data
}
