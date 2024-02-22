import Sidebar from "@/components/sidebar";
import BarChartGraph from "@/components/charts/foodIntake";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Sidebar />
      <div className="bg-white text-black w-[cal(100%-72px)] md:w-[cal(100%-244px)] h-screen overflow-auto ml-[72px] md:ml-[244px]">
      <div className="absolute top-0 right-0 text-elanco p-10">
          <a href="..">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 cursor-pointer">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M20 20L4 4m16 0L4 20" />
            </svg>
          </a>
        </div>
        
        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">Food Intake</div>
          <div className="text-lg">Let's see how your dog doing.</div>
        </div>
        
        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-0">Displaying data from the past seven days:</div>
        
        <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5 ml-2"><BarChartGraph/> </div>

      </div>
    </main>
  );
}
