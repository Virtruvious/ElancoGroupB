import Sidebar from "@/components/sidebar";

export default function Home() {
    // const names = ["Heart Rate", "Behavior"]
  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white w-full text-black h-screen overflow-auto">

        <div className="p-3 grid md:grid-cols-2">
            {/* {names.map((name) => ( */}
                <div className="
                        grid grid-cols-1 lg:grid-cols-8 gap-y-3
                        m-1 md:m-3 lg:m-5 p-2 md:p-5 lg:p-7
                        border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl
                        ">
                    <div className="font-bold text-center lg:text-end text-elanco text-xl md:text-2xl lg:text-3xl col-span-3 self-end">Behavior{/* name */}</div>
                    <img
                        src="/LogoWhite.png"
                        alt="Elanco Logo"
                        className="p-5 w-[16rem] rounded-md row-span-2 col-span-5 bg-elanco mx-auto"
                    />
                    <div className="text-base text-center lg:text-end col-span-3">This is the content of<br/>Behavior{/* name */}</div>
                </div>
            {/* ))} */}
            {/* {names.map((name) => ( */}
                <div className="
                        grid grid-cols-1 lg:grid-cols-8 gap-y-3
                        m-1 md:m-3 lg:m-5 p-2 md:p-5 lg:p-7
                        border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl
                        ">
                    <div className="font-bold text-center lg:text-start text-elanco text-xl md:text-2xl lg:text-3xl col-span-3 self-end">Behavior{/* name */}</div>
                    <img
                        src="/LogoWhite.png"
                        alt="Elanco Logo"
                        className="p-5 w-[16rem] rounded-md row-span-2 col-span-5 bg-elanco mx-auto lg:order-first"
                    />
                    <div className="text-base text-center lg:text-start col-span-3">This is the content of<br/>Behavior{/* name */}</div>
                </div>
            {/* ))}
            {names.map((name) => ( */}
                <div className="
                        grid grid-cols-1 lg:grid-cols-8 gap-y-3
                        m-1 md:m-3 lg:m-5 p-2 md:p-5 lg:p-7
                        border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl
                        ">
                    <div className="font-bold text-center lg:text-start text-elanco text-xl md:text-2xl lg:text-3xl col-span-3 self-end">Behavior{/* name */}</div>
                    <img
                        src="/LogoWhite.png"
                        alt="Elanco Logo"
                        className="p-5 w-[16rem] rounded-md row-span-2 col-span-5 bg-elanco mx-auto"
                    />
                    <div className="text-base text-center lg:text-start col-span-3">This is the content of<br/>Behavior{/* name */}</div>
                </div>
            {/* ))}
            {names.map((name) => ( */}
                <div className="
                        grid grid-cols-1 lg:grid-cols-8 gap-y-3
                        m-1 md:m-3 lg:m-5 p-2 md:p-5 lg:p-7
                        border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl
                        ">
                    <div className="font-bold text-center lg:text-end text-elanco text-xl md:text-2xl lg:text-3xl col-span-3 self-end">Behavior{/* name */}</div>
                    <img
                        src="/LogoWhite.png"
                        alt="Elanco Logo"
                        className="p-5 w-[16rem] rounded-md row-span-2 col-span-5 bg-elanco mx-auto order-first"
                    />
                    <div className="text-base text-center lg:text-end col-span-3">This is the content of<br/>Behavior{/* name */}</div>
                </div>
            {/* ))} */}
            
        </div>

      </div>
    </main>
  );
}
