import Sidebar from "../components/sidebar";
import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import axios from "axios";

export default async function Home(req: NextRequest): Promise<any> {
  const session = await getServerSession(authOptions);

  if (session === null) {
    redirect("/api/auth/signin");
  }

  console.log("Current session", session);

  //   const dogInfo = axios.post("/api/dog/getinfo", {
  //   user: session?.user,
  //   token: session?.jwt,
  // });

  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white w-full text-black">
        {session !== null ? (
          <h1 className="leading-loose font-extrabold text-accent">
            Hi {session?.user.name}!
          </h1>
        ) : (
          <a className="btn btn-primary" href="/api/auth/signin">
            Sign in
          </a>
        )}
      </div>
    </main>
  );
}
