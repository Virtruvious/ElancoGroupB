import Sidebar from "@/components/sidebar";
import LineGraph from "@/components/charts/foodIntake";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white w-full text-black h-screen overflow-auto">
        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">Hello! User</div>
          <div className="text-lg">Let's see how your dog doing.</div>
        </div>
        
        <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-0">Displaying data from the previous year.</div>
        <div className="px-3 grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-full text-center
                      grid grid-cols-1 lg:grid-cols-8 gap-y-3
                      m-1 md:m-3 xl:m-5 p-2 md:p-5 xl:p-7
                      border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl">
              <div className="font-bold lg:text-end text-elanco text-2xl md:text-3xl lg:text-5xl col-span-3 self-end">Behavior{/* name */}</div>
              <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5 ml-2"><LineGraph/></div>
              <div className="text-base lg:text-end col-span-3">Description</div>
            </div>
        </div>

      </div>
    </main>
  );
}
