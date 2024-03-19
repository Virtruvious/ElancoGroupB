'use client';
import { signOut } from "next-auth/react";

export default function Sidebar() {
  let navbarItems = [
    { name: "Dashboard", href: "..",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>}, 
    { name: "Heart Rate Monitor ", href: "/heartRate",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" strokeWidth="1" stroke="currentColor" className="size-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.992 12.413L1.573 7.401c-2.953-2.966 1.355-8.71 5.419-4.064c4.064-4.632 8.412 1.111 5.418 4.064z M3.515 6.753h1.53l1.032-1.968L7.64 8.41l1.343-1.657h1.5" />
          </svg>},
    { name: "Temperature Tracker ", href: "/temperature",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="2 2 20 20" className="size-6 shrink-0">
            <path d="M12 2a3.25 3.25 0 0 1 3.245 3.065l.005.185l.001 7.952l.08.069a4.99 4.99 0 0 1 1.644 3.223l.019.252L17 17a5 5 0 1 1-8.51-3.56l.18-.17l.079-.068l.001-7.952a3.25 3.25 0 0 1 2.884-3.23l.182-.015zm0 1.5a1.75 1.75 0 0 0-1.744 1.607l-.006.143v8.695l-.309.224a3.5 3.5 0 1 0 4.283.128l-.165-.127l-.307-.225l-.002-8.695A1.75 1.75 0 0 0 12 3.5M12 8a.75.75 0 0 1 .75.75v5.865a2.501 2.501 0 1 1-1.5 0V8.75A.75.75 0 0 1 12 8" />
          </svg>},
    { name: "Weight Manager", href: "/weight",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="size-6 shrink-0">
            <path d="M19 4h-1.45A3.08 3.08 0 0 0 17 3a3 3 0 0 0-2.25-1H9.27A3 3 0 0 0 7 3a3.08 3.08 0 0 0-.57 1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-10.48.34A1 1 0 0 1 9.27 4h5.46a1 1 0 0 1 .75.34a1 1 0 0 1 .25.78l-.5 4a1 1 0 0 1-1 .88h-1.64l1.14-2.4a1 1 0 0 0-1.8-.86L10.37 10h-.6a1 1 0 0 1-1-.88l-.5-4a1 1 0 0 1 .25-.78M20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.37l.42 3.37a3 3 0 0 0 3 2.63h4.46a3 3 0 0 0 3-2.63L17.63 6H19a1 1 0 0 1 1 1Zm-6-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2" />
          </svg>},
  ];

  return (
    <aside className="group flex flex-col md:p-1 bg-elanco absolute h-dvh w-[72px] md:w-[244px] hover:w-[244px] duration-1000 z-10">
      <img
        src="/LogoWhite.png"
        alt="Elanco Logo"
        className="p-3 md:p-5 w-[5rem] md:w-[16rem] group-hover:w-[16rem] duration-1000"

      />
      <nav className="content overflow-auto flex flex-col gap-y-3 items-center mx-3">
        {navbarItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex md:gap-3 group-hover:gap-3 p-3 w-full rounded-lg text-white hover:text-elanco hover:bg-white outline-white duration-200"
          >
            {item.icon}

            <span className="
                w-0 md:w-[10rem] group-hover:w-[10rem] whitespace-nowrap
                scale-x-0 md:scale-x-100 group-hover:scale-x-100
                origin-left transition-[transform,width] duration-1000">{item.name}</span>
          </a>
        ))}
      </nav>

      

      <div className="mt-auto items-center justify-between m-3">
        
        <button
          onClick={() => signOut()}
          className="flex justify-between md:gap-3 group-hover:gap-3 p-3 
                w-full rounded-lg bg-white font-light text-black outline-elanco
                hover:bg-opacity-70 duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>

          <span className=" w-0 md:w-[10rem] group-hover:w-[10rem] whitespace-nowrap
                scale-x-0 md:scale-x-100 group-hover:scale-x-100
                origin-left transition-[transform,width] duration-1000">Logout</span>
        </button>
        
      </div>
    </aside>
  );
}
