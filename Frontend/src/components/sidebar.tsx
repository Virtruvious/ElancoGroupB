'use client';
import { signOut } from "next-auth/react";

export default function Sidebar() {
  let navbarItems = [
    { name: "Dashboard", href: ".." }, 
    { name: "Heart Rate Monitor ", href: "/heartRate" },
    { name: "Temperature Tracker ", href: "/temperature" },
    { name: "Weight Manager", href: "/weight" },
  ];

  return (
    <aside className="group flex flex-col lg:p-1 bg-elanco">
      <img
        src="/LogoWhite.png"
        alt="Elanco Logo"
        className="p-3 lg:p-5 w-[5rem] lg:w-[16rem] group-hover:w-[16rem] duration-1000"

      />
      <nav className="flex flex-col gap-y-3 items-center mx-3">
        {navbarItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex lg:gap-3 group-hover:gap-3 p-3 w-full rounded-lg text-white hover:text-elanco hover:bg-white outline-white duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

            <span className="
                w-0 lg:w-auto group-hover:w-auto whitespace-nowrap
                scale-x-0 lg:scale-x-100 group-hover:scale-x-100
                origin-left transition-transform duration-1000">{item.name}</span>
          </a>
        ))}
      </nav>

      

      <div className="mt-auto items-center justify-between m-3">
        
        <button
          onClick={() => signOut()}
          className="flex justify-center lg:gap-3 group-hover:gap-3 p-3 
                w-full rounded-lg bg-white font-light text-black outline-elanco
                hover:bg-opacity-70 duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>

          <span className=" w-0 lg:w-auto group-hover:w-auto whitespace-nowrap
                scale-x-0 lg:scale-x-100 group-hover:scale-x-100
                origin-left transition-transform duration-1000">Logout</span>
        </button>
        
      </div>
    </aside>
  );
}
