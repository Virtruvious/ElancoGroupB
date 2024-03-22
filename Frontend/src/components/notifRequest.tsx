"use server";
import axios from "axios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function NotifRequest() {
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/login");
  }

  const url = "http://localhost:8000/notifs/getNotifs";
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${session.jwt}`,
      "Content-Type": "application/json",
    },
  });
  return {
    data: response.data,
    session: session,
  };
}

export async function readNotif(id: number) {
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/login");
  }

  const url = "http://localhost:8000/notifs/readNotif?id="+id;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${session.jwt}`,
      "Content-Type": "application/json",
    },
  });
}