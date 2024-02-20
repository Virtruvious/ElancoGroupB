import Sidebar from "@/components/sidebar";
import BPM from "./../../../heartRate/page";

export default function Home() {
    const names = ["Heart Rate", "Calorie Burnt", "Temperature"]
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
            {names.map((name) => (
                <a href="../data/specific" className="
                        flex flex-col
                        m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                        border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl text-center
                        ">
                    <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">{ name }</div>
                    {/* <div className="lg:hidden">This is the content of<br/>{ name }</div> */}
                    <div className="grid grid-cols-3 mt-2">
                        <div>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">72</div>
                          <div>Minimum</div>
                        </div>
                        <div className="border border-2 border-y-0">
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">87</div>
                          <div>Average</div>
                        </div>
                        <div>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">90</div>
                          <div>Maximum</div>
                        </div>
                    </div>
                </a>
            ))}
            {/* {names.map((name) => (
                <div className="
                        grid grid-cols-1 xl:grid-cols-3
                        m-2 md:m-3 xl:mx-5 p-2 md:p-5 xl:p-7
                        border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl
                        ">
                    <img
                        src="/LogoWhite.png"
                        alt="Elanco Logo"
                        className="p-5 w-[16rem] rounded-md row-span-2 bg-elanco mx-auto hidden xl:block order-first"
                    />
                    <div className="font-bold text-center xl:text-end text-elanco text-xl md:text-2xl xl:text-3xl col-span-2 self-end">{ name }</div>
                    <div className="text-base text-center xl:text-end col-span-2">This is the content of<br/>{ name }</div>
                </div>
            ))}
            {names.map((name) => (
                <div className="
                        grid grid-cols-1 xl:grid-cols-3
                        m-1 md:m-3 xl:m-5 p-2 md:p-5 xl:p-7
                        border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl
                        ">
                    <div className="row-span-2 m-auto hidden xl:block order-first">
                        <div className="items-center text-6xl font-bold text-elanco justify-center font-mono">87</div>
                        <div className="text-center">Average</div>
                    </div>
                    <div className="font-bold text-center xl:text-end text-elanco text-xl md:text-2xl xl:text-3xl col-span-2 self-end">{ name }</div>
                    <div className="text-base text-center xl:text-end col-span-2">This is the content of<br/>{ name }</div>
                </div>
            ))} */}
            <div className="col-span-full text-center
                      grid grid-cols-1 lg:grid-cols-8 gap-y-3
                      m-1 md:m-3 xl:m-5 p-2 md:p-5 xl:p-7
                      border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl">
              <div className="font-bold lg:text-end text-elanco text-2xl md:text-3xl lg:text-5xl col-span-3 self-end">Behavior{/* name */}</div>
              <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5 ml-2"><BPM/></div>
              <div className="text-base lg:text-end col-span-3">Description</div>
            </div>
        </div>

      </div>
    </main>
  );
}
