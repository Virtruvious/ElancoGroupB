"use client";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  let navbarItems = [
    {
      name: "Home",
      href: "..",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "Unwrapped",
      href: "/unwrapped",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
          className="size-6 shrink-0"
        >
          <path
            fill="currentColor"
            d="M1664 512h256v1536H256V512h256V384h128v128h896V384h128zm128 128h-128v128h128zm-256 0H640v128h896zm-1024 0H384v128h128zM384 1920h1408V896H384zM256 384V256H128v1408H0V128h256V0h128v128h896V0h128v128h256v128h-256v128h-128V256H384v128zm384 1024v-128h128v128zm256 0v-128h128v128zm256 0v-128h128v128zm256 0v-128h128v128zm-768 256v-128h128v128zm256 0v-128h128v128zm256 0v-128h128v128zm-256-512v-128h128v128zm256 0v-128h128v128zm256 0v-128h128v128z"
          />
        </svg>
      ),
      special: true,
    },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" className="size-6 shrink-0"> 
              <g id="SVGRepo_iconCarrier" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd" clipRule="evenodd">
                <path d="M9.918 10.0005H7.082C6.66587 9.99708 6.26541 10.1591 5.96873 10.4509C5.67204 10.7427 5.50343 11.1404 5.5 11.5565V17.4455C5.5077 18.3117 6.21584 19.0078 7.082 19.0005H9.918C10.3341 19.004 10.7346 18.842 11.0313 18.5502C11.328 18.2584 11.4966 17.8607 11.5 17.4445V11.5565C11.4966 11.1404 11.328 10.7427 11.0313 10.4509C10.7346 10.1591 10.3341 9.99708 9.918 10.0005Z"></path>
                <path d="M9.918 4.0006H7.082C6.23326 3.97706 5.52559 4.64492 5.5 5.4936V6.5076C5.52559 7.35629 6.23326 8.02415 7.082 8.0006H9.918C10.7667 8.02415 11.4744 7.35629 11.5 6.5076V5.4936C11.4744 4.64492 10.7667 3.97706 9.918 4.0006Z"></path>
                <path d="M15.082 13.0007H17.917C18.3333 13.0044 18.734 12.8425 19.0309 12.5507C19.3278 12.2588 19.4966 11.861 19.5 11.4447V5.55666C19.4966 5.14054 19.328 4.74282 19.0313 4.45101C18.7346 4.1592 18.3341 3.9972 17.918 4.00066H15.082C14.6659 3.9972 14.2654 4.1592 13.9687 4.45101C13.672 4.74282 13.5034 5.14054 13.5 5.55666V11.4447C13.5034 11.8608 13.672 12.2585 13.9687 12.5503C14.2654 12.8421 14.6659 13.0041 15.082 13.0007Z"></path>
                <path d="M15.082 19.0006H17.917C18.7661 19.0247 19.4744 18.3567 19.5 17.5076V16.4936C19.4744 15.6449 18.7667 14.9771 17.918 15.0006H15.082C14.2333 14.9771 13.5256 15.6449 13.5 16.4936V17.5066C13.525 18.3557 14.2329 19.0241 15.082 19.0006Z"></path>
              </g>
            </svg>
    }, 
    {
      name: "Heart Rate Monitor ",
      href: "/heartRate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          strokeWidth="1"
          stroke="currentColor"
          className="size-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.992 12.413L1.573 7.401c-2.953-2.966 1.355-8.71 5.419-4.064c4.064-4.632 8.412 1.111 5.418 4.064z M3.515 6.753h1.53l1.032-1.968L7.64 8.41l1.343-1.657h1.5"
          />
        </svg>
      ),
    },
    {
      name: "Temperature Tracker ",
      href: "/temperature",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="2 2 20 20"
          className="size-6 shrink-0"
        >
          <path d="M12 2a3.25 3.25 0 0 1 3.245 3.065l.005.185l.001 7.952l.08.069a4.99 4.99 0 0 1 1.644 3.223l.019.252L17 17a5 5 0 1 1-8.51-3.56l.18-.17l.079-.068l.001-7.952a3.25 3.25 0 0 1 2.884-3.23l.182-.015zm0 1.5a1.75 1.75 0 0 0-1.744 1.607l-.006.143v8.695l-.309.224a3.5 3.5 0 1 0 4.283.128l-.165-.127l-.307-.225l-.002-8.695A1.75 1.75 0 0 0 12 3.5M12 8a.75.75 0 0 1 .75.75v5.865a2.501 2.501 0 1 1-1.5 0V8.75A.75.75 0 0 1 12 8" />
        </svg>
      ),
    },
    {
      name: "Weight Manager",
      href: "/weight",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="size-6 shrink-0"
        >
          <path d="M19 4h-1.45A3.08 3.08 0 0 0 17 3a3 3 0 0 0-2.25-1H9.27A3 3 0 0 0 7 3a3.08 3.08 0 0 0-.57 1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-10.48.34A1 1 0 0 1 9.27 4h5.46a1 1 0 0 1 .75.34a1 1 0 0 1 .25.78l-.5 4a1 1 0 0 1-1 .88h-1.64l1.14-2.4a1 1 0 0 0-1.8-.86L10.37 10h-.6a1 1 0 0 1-1-.88l-.5-4a1 1 0 0 1 .25-.78M20 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.37l.42 3.37a3 3 0 0 0 3 2.63h4.46a3 3 0 0 0 3-2.63L17.63 6H19a1 1 0 0 1 1 1Zm-6-3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2" />
        </svg>
      ),
    },
    {
      name: "Calorie Monitor",
      href: "/calorie",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="size-6 shrink-0">
              <path fill="currentColor" fillRule="evenodd" d="M6.75 1A5.75 5.75 0 0 0 1 6.75v.518a2 2 0 0 0 0 3.464v1.518A2.75 2.75 0 0 0 3.75 15h8.5A2.75 2.75 0 0 0 15 12.25v-1.518a2 2 0 0 0 0-3.464V6.75A5.75 5.75 0 0 0 9.25 1zM14 8.5H2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1M13.5 7v-.25A4.25 4.25 0 0 0 9.25 2.5h-2.5A4.25 4.25 0 0 0 2.5 6.75V7zM11 11h2.5v1.25c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25V11H9l1 1z" clipRule="evenodd" />
            </svg>
    }
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
            className={`relative flex overflow-hidden md:gap-3 group-hover:gap-3 p-3 w-full rounded-lg
                        text-white ${item.name == "Unwrapped" ? "group/background":"hover:text-elanco hover:bg-white outline-white"}
                        duration-200`}
          >
            {item.name == "Unwrapped" ? <div className="absolute top-0 left-0 -z-10 w-full h-full
                                                        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0
                                                        group-hover/background:opacity-100 duration-200"></div> :<></>}
            {item.icon}

            <span
              className="
                w-0 md:w-[10rem] group-hover:w-[10rem] whitespace-nowrap
                scale-x-0 md:scale-x-100 group-hover:scale-x-100
                origin-left transition-[transform,width] duration-1000"
            >
              {item.name}
            </span>
          </a>
        ))}
      </nav>

      <div className="mt-auto items-center justify-between m-3">
        <button
          onClick={() => signOut()}
          className="flex justify-between md:gap-3 group-hover:gap-3 p-3 
                w-full rounded-lg bg-white font-light text-black outline-elanco
                hover:bg-opacity-70 duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>

          <span
            className=" w-0 md:w-[10rem] group-hover:w-[10rem] whitespace-nowrap
                scale-x-0 md:scale-x-100 group-hover:scale-x-100
                origin-left transition-[transform,width] duration-1000"
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}
