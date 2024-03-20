"use client";
import Sidebar from "../sidebar";
import DateSelect from "../dateSelect";

export default function ChartBody({
  title,
  graph,
  data,
  start,
  end,
  setStart,
  setEnd,
  submit,
}: any) {
  return (
    <main className="min-h-screen">
      <Sidebar />
      <div className="relative overflow-hidden bg-white text-black w-[cal(100%-72px)] md:w-[cal(100%-244px)] h-screen ml-[72px] md:ml-[244px]">
        {data === null && (
          <div className="absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center blur-none">
            <div className="text-3xl font-bold text-elanco animate-pulse">
              Loading...
            </div>
          </div>
        )}
        <div className={`${data === null ? "blur-md" : ""} `}>
          <div className="absolute top-0 right-0 text-elanco p-10">
            <a href="..">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M20 20L4 4m16 0L4 20"
                />
              </svg>
            </a>
          </div>
          <div className="mx-1 md:mx-3 xl:mx-5 p-5 pb-1">
            <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">
              {title}
            </div>
            <div className="text-lg">Let's see how your dog is doing.</div>
          </div>

          <div className="flex p-5 mx-1 md:mx-3 xl:mx-5 s-300 justify-between items-center">
            <DateSelect
              start={start}
              end={end}
              setStart={setStart}
              setEnd={setEnd}
              submit={submit}
            />
          </div>
        </div>
        
        <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5">
          {graph({ props: data })}
        </div>
      </div>
    </main>
  );
}
