"use client";
import { signIn } from "next-auth/react";
import { useRef } from "react";

export const Login = () => {
  const username = useRef("");
  const password = useRef("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn("credentials", {
      username: username.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="border w-full h-15 px-5 py-5 mt-2  hover:outline-none focus:outline-none focus:ring-1 focus:ring-elanco rounded-lg"
          onChange={(e) => {
            username.current = e.target.value;
          }}
        ></input>

        <input
          type="password"
          placeholder="Password"
          className="border w-full h-15 px-5 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-elanco rounded-lg"
          onChange={(e) => {
            password.current = e.target.value;
          }}
        ></input>

        <div className="flex justify-between items-baseline">
          <button
            type="submit"
            className="mt-4 border-2 border-elanco px-10 py-2 w-full hover:bg-elanco hover:text-white duration-200 rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};