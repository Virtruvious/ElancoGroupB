import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Sidebar />
      <div className="bg-white text-black w-[cal(100%-72px)] md:w-[cal(100%-244px)] h-dvh overflow-auto ml-[72px] md:ml-[244px]">
        <div className="absolute top-0 right-0 text-elanco p-10">
          <a href="../../..">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 cursor-pointer">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M20 20L4 4m16 0L4 20" />
            </svg>
          </a>
        </div>
        <div className="p-10 grid lg:grid-cols-6 gap-3">
            <div className="lg:col-span-2 text-center lg:text-start">
                <div className="font-bold text-elanco text-xl md:text-3xl xl:text-5xl">Heart Rate</div>
                <div className="text-base">This is the content of Heart Rate</div>
            </div>
            <div className="flex text-center lg:col-start-4 lg:col-span-3 self-end">
                <button className="w-full border-2 border-gray-200 rounded-l-full shadow-md hover:shadow-xl">1D</button>
                <button className="w-full border-2 border-gray-200 shadow-md hover:shadow-xl">1M</button>
                <button className="w-full border-2 border-gray-200 shadow-md hover:shadow-xl">6M</button>
                <button className="w-full border-2 border-gray-200 shadow-md hover:shadow-xl">1Y</button>
                <button className="w-full border-2 border-gray-200 rounded-r-full shadow-md hover:shadow-xl">All</button>
            </div>
            <div className="col-span-full h-full p-5">
                <img
                    src="/LogoWhite.png"
                    alt="Elanco Logo"
                    className="p-5 w-[48rem] h-[24rem] rounded-md row-span-2 col-span-5 bg-elanco mx-auto"
                />
            </div>
            
        </div>

      </div>
    </main>
  );
}
