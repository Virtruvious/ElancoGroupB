import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Login } from "@/components/login";

export default async function LoginPage(req: NextRequest): Promise<any> {
  const session = await getServerSession(authOptions);

  if (session != null) {
    redirect("/");
  }

  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex bg-elanco justify-center items-center">
        <img src="/LogoWhite.png" alt="Elanco Logo" className="p-5 w-[75%]" draggable={false} />
      </div>
      <div className="bg-gray-100 flex justify-center items-center -mt-3 md:mt-0 rounded-t-xl md:rounded-none">
        <div className="text-gray-800 px-4 py-3 flex flex-col justify-center items-center">
          <div className="py-3 sm:max-w-xl mx-auto text-center">
            <span className="text-2xl font-white">Login to Your Account</span>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
