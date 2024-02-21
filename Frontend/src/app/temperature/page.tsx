import Sidebar from "@/components/sidebar";
import LineGraph from "@/components/charts/temperature";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white w-full text-black h-screen overflow-auto">
        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">Temperature</div>
          <div className="text-lg">Let's see how your dog doing.</div>
        </div>
        
        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-0">Displaying data from the past seven days:</div>
        <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5 ml-2"><LineGraph/></div>

      </div>
    </main>
  );
}
