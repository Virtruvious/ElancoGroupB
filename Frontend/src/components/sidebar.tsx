import { useEffect } from "react";

export default function Sidebar({ className }) {
  let navbarItems = [
    { name: "Home", href: "#" },
    { name: "Page 1", href: "#" },
    { name: "Page 2", href: "#" },
  ];

  return (
    <aside className={`flex flex-col bg-elanco ${className}`}>
      <img
        src="/LogoWhite.png"
        alt="Elanco Logo"
        className="p-5 mb-10 w-[16rem]"
      />
      <nav className="flex flex-col gap-y-3">
        {navbarItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="p-2 mx-3 rounded-lg text-white hover:text-elanco hover:bg-white duration-200"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="mt-auto items-center justify-between m-3">
        <button className="rounded-lg bg-white font-light text-black p-3 w-full hover:bg-opacity-70 duration-200">
          Logout
        </button>
      </div>
    </aside>
  );
}
