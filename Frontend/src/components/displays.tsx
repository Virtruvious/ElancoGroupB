"use client";
import React, { useEffect, useState } from "react";
import style from "@/app/design-framework/data/overview/style.module.css";

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
    let cards = Array.from(document.getElementsByClassName(style.card));
    cards.forEach(card => {
      let href = card.getAttribute('data-href') || "#"
      if (window.matchMedia("(any-pointer:fine").matches) {
        card.addEventListener("mouseenter", function() {
          card.classList.add(style.hover);
        })
        card.addEventListener("mouseleave", function() {
          card.classList.remove(style.hover);
        })
        card.addEventListener("click", function() {
          window.location.assign(href)
        })
      }

      if (window.matchMedia("(any-pointer:coarse").matches) {
        card.addEventListener("touchstart", function() {
          card.classList.add(style.hover);
        })
        card.addEventListener("touchend", function() {
          card.classList.remove(style.hover);
        })
        card.addEventListener("click", function() {
          window.location.assign(href)
        })
        // let touchExpired = 0
        // cards[i].addEventListener("click", function(e) {
        //   cards[i].classList.toggle(style.hover);
        //   if (touchExpired == 0) {
        //     touchExpired = e.timeStamp + 500
        //   }
        //   else if (e.timeStamp <= touchExpired) {
        //     e.preventDefault();
        //     window.location.assign("../data/specific");
        //     touchExpired = 0
        //   }
        //   else {
            
        //     touchExpired = e.timeStamp + 500
        //   }
        // })
      }
    });
  })

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
          
        <div id="item1" className="carousel-item w-full">
          <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 w-full lg:h-[330px]">
            {firstHalf.map((row: any) => (
              <div data-href={"../" + row.href} className={`
                      ${style.card} flex flex-col h-fit
                      m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                      border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                      transition ease-in-out duration-300
                      `}>
                  <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">
                    {row.title}
                  </div>
                  
                  <div className={style.data}>
                      <div className={style.min}>
                        <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                          {row.min} {row.units != "" && <span className="-ml-5 text-xl">{row.units} </span>}
                        </div>
                        <div>Minimum</div>
                      </div>
                      <div className={style.average}>
                        <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                          {row.average} {row.units != "" && <span className="-ml-5 text-xl">{row.units} </span>}
                        </div>
                        <div>Average</div>
                      </div>
                      <div className={style.max}>
                        <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                          {row.max} {row.units != "" && <span className="-ml-5 text-xl">{row.units} </span>}
                        </div>
                        <div>Maximum</div>
                      </div>
                  </div>
              </div>
            ))}
          </div> 
        </div>

        <div id="item2" className="carousel-item w-full">
          <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 w-full lg:h-[330px]">
            {secondHalf.map((row: any) => (
              <div data-href={"../" + row.href} className={`
                      ${style.card} flex flex-col h-fit
                      m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                      border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                      transition ease-in-out duration-300
                      `}>
                  <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">
                    {row.title}
                  </div>
                  
                  <div className={style.data}>
                      <div className={style.min}>
                        <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                          {row.min} {row.units != "" && <span className="-ml-5 text-xl">{row.units} </span>}
                        </div>
                        <div>Minimum</div>
                      </div>
                      <div className={style.average}>
                        <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                          {row.average} {row.units != "" && <span className="-ml-5 text-xl">{row.units} </span>}
                        </div>
                        <div>Average</div>
                      </div>
                      <div className={style.max}>
                        <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                          {row.max} {row.units != "" && <span className="-ml-5 text-xl">{row.units} </span>}
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
        <a href="#item1" className="btn btn-xs text-elanco bg-white hover:bg-white hover:text-elanco shadow-sm hover:shadow-lg border-none">1</a> 
        <a href="#item2" className="btn btn-xs text-elanco bg-white hover:bg-white hover:text-elanco shadow-sm hover:shadow-lg border-none">2</a> 
      </div>
    </>
  );
};
