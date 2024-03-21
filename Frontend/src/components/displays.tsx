"use client";
import React, { useEffect, useState } from "react";

export const DashboardDisplays = (props: any) => {
  const firstHalf = props.props.slice(0, 3);
  const secondHalf = props.props.slice(3, 6);
  // const [currentSet, setCurrentSet] = useState(firstHalf);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentSet[0].title === "Heart Rate") {
  //       setCurrentSet(secondHalf);
  //     } else {
  //       setCurrentSet(firstHalf);
  //     }
  //   }, 15000);
  //   return () => clearInterval(interval);
  // }, [currentSet]);
  useEffect(() => {
    let cards = Array.from(document.getElementsByClassName("card"));
    cards.forEach((card) => {
      let href = card.getAttribute("data-href") || "#";
      if (window.matchMedia("(any-pointer:fine").matches) {
        card.addEventListener("mouseenter", function () {
          card.classList.add("hover");
        });
        card.addEventListener("mouseleave", function () {
          card.classList.remove("hover");
        });
        card.addEventListener("click", function () {
          window.location.assign(href);
        });
      }

      if (window.matchMedia("(any-pointer:coarse").matches) {
        card.addEventListener("touchstart", function () {
          card.classList.add("hover");
        });
        card.addEventListener("touchend", function () {
          card.classList.remove("hover");
        });
        card.addEventListener("click", function () {
          window.location.assign(href);
        });
      }
    });
  });

  return (
    // <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 lg:h-[330px]">
    //   {currentSet.map((row: any) => (
    //     <a
    //       key={row.title}
    //       href={"../" + row.href}
    //       className={`
    //                   ${style.card} flex flex-col h-fit
    //                   m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
    //                   border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg focus:shadow-lg outline-elanco text-center
    //                   transition ease-in-out duration-300
    //                   `}
    //     >
    //       <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">
    //         {row.title}
    //       </div>

    //       <div className={style.data}>
    //         <div className={style.min}>
    //           <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
    //             {row.min} {row.units != "" && <span className="-ml-5 text-xl">{row.units} </span>}
    //           </div>
    //           <div>Minimum</div>
    //         </div>
    //         <div className={style.average}>
    //           <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
    //             {row.average} {row.units != "" && <span className="-ml-5 text-xl">{row.units} </span>}
    //           </div>
    //           <div>Average</div>
    //         </div>
    //         <div className={style.max}>
    //           <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
    //             {row.max} {row.units != "" && <span className="-ml-5 text-xl">{row.units} </span>}
    //           </div>
    //           <div>Maximum</div>
    //         </div>
    //       </div>
    //     </a>
    //   ))}
    // </div>

    <>
      <div className="carousel w-full">
        <div id="set1" className="carousel-item w-full">
          <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 w-full lg:h-[330px]">
            {firstHalf.map((row: any) => (
              <div
                key={row.title}
                data-href={"../" + row.href}
                className="
                      card flex flex-col h-fit
                      m-1 md:m-3 lg:mx-1 xl:mx-3 p-2 md:p-3 xl:p-5
                      border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                      transition ease-in-out duration-300
                      "
              >
                <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">
                  {row.title}{row.title == "Steps" ? <span className="text-gray-600 font-normal text-sm"> per day</span>: <></>}
                </div>

                <div className="data">
                  <div className="min">
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.min}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-lg sm:text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Minimum</div>
                  </div>
                  <div className="average">
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.average}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-lg sm:text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Average</div>
                  </div>
                  <div className="max">
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.max}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-lg sm:text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Maximum</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="set2" className="carousel-item w-full">
          <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 w-full lg:h-[330px]">
            {secondHalf.map((row: any) => (
              <div
                key={row.title}
                data-href={"../" + row.href}
                className="
                      card flex flex-col h-fit
                      m-1 md:m-3 lg:mx-1 xl:mx-3 p-2 md:p-3 xl:p-5
                      border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                      transition ease-in-out duration-300
                      "
              >
                <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">
                  {row.title}{row.title == "Steps" ? <span className="text-gray-600 font-normal text-sm"> per day</span>: <></>}
                </div>

                <div className="data">
                  <div className="min">
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.min}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-lg sm:text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Minimum</div>
                  </div>
                  <div className="average">
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.average}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-lg sm:text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Average</div>
                  </div>
                  <div className="max">
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.max}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-lg sm:text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Maximum</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        <a
          href="#set1"
          className="btn btn-sm text-elanco bg-white hover:bg-white hover:text-elanco hover:shadow-lg border-2 border-gray-200 hover:border-gray-200"
        >
          1
        </a>
        <a
          href="#set2"
          className="btn btn-sm text-elanco bg-white hover:bg-white hover:text-elanco hover:shadow-lg border-2 border-gray-200 hover:border-gray-200"
        >
          2
        </a>
      </div>
    </>
  );
};
