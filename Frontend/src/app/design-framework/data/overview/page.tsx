'use client';
import Sidebar from "@/components/sidebar";
import style from "./style.module.css";
import { useEffect } from "react";


export default function Home() {
    const names = ["Heart Rate", "Calorie Burnt", "Temperature"]
    const names2 = ["Heart Rate", "Calorie Burnt", "Temperature", "Food Intake"]
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
    <main className="min-h-dvh">
      <Sidebar />
      <div className="bg-white text-black w-[calc(100%-72px)] md:w-[calc(100%-244px)] h-dvh p-4 overflow-y-scroll ml-[72px] md:ml-[244px]">
        <div className="mx-1 md:mx-3 xl:mx-5 p-2 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">Hello! User</div>
          <div className="text-lg">Let's see how your dog doing.</div>
        </div>
        
        <div className="mx-1 md:mx-3 xl:mx-5 p-2 pb-0">Displaying data from <span className="font-bold">the previous year</span>.</div>
          <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 lg:h-[330px]">
            {/* {names.map((name) => (
                <a href="../data/specific" className="
                        flex flex-col
                        m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                        border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl text-center
                        transition ease-in-out duration-300
                        ">
                    <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">{ name }</div> */}
                    {/* <div className="lg:hidden">This is the content of<br/>{ name }</div> */}
                    {/* <div className="grid grid-cols-3 mt-2">
                        <div>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">72</div>
                          <div>Minimum</div>
                        </div>
                        <div className="border-2 border-y-0">
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">87</div>
                          <div>Average</div>
                        </div>
                        <div>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">90</div>
                          <div>Maximum</div>
                        </div>
                    </div>
                </a>
            ))} */}
            {/* current */}
            {names.map((name) => (
                <div data-href="../data/specific" className={`
                        ${style.card} flex flex-col h-fit
                        m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                        border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                        transition ease-in-out duration-300
                        `}>
                    <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">{ name }</div>
                    {/* <div className="lg:hidden">This is the content of<br/>{ name }</div> */}
                    <div className={style.data}>
                        <div className={style.min}>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">7200.00</div>
                          <div>Minimum</div>
                        </div>
                        <div className={style.average}>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">8700.00</div>
                          <div>Average</div>
                        </div>
                        <div className={style.max}>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">9000.00</div>
                          <div>Maximum</div>
                        </div>
                    </div>
                </div>
            ))}
          </div>
            {/* Tried carousel
            <div className="px-2 flex items-center gap-y-3 lg:h-[330px] overflow-x-auto">
            {names2.map((name) => (
                <a href="../data/specific" className={`
                        ${style.card} flex flex-col h-fit
                        m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                        border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg text-center
                        transition ease-in-out duration-300
                        `}>
                    <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">{ name }</div>
                    <div className={style.data}>
                        <div className={style.min}>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">72</div>
                          <div>Minimum</div>
                        </div>
                        <div className={style.average}>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">87</div>
                          <div>Average</div>
                        </div>
                        <div className={style.max}>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">90</div>
                          <div>Maximum</div>
                        </div>
                    </div>
                </a>
            ))}
            </div> */}
            {/* 
            {/* {names.map((name) => (
                <div className="
                        grid grid-cols-1 xl:grid-cols-3
                        m-2 md:m-3 xl:mx-5 p-2 md:p-5 xl:p-7
                        border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl
                        transition ease-in-out duration-300
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
                        transition ease-in-out duration-300
                        ">
                    <div className="row-span-2 m-auto hidden xl:block order-first">
                        <div className="items-center text-6xl font-bold text-elanco justify-center font-mono">87</div>
                        <div className="text-center">Average</div>
                    </div>
                    <div className="font-bold text-center xl:text-end text-elanco text-xl md:text-2xl xl:text-3xl col-span-2 self-end">{ name }</div>
                    <div className="text-base text-center xl:text-end col-span-2">This is the content of<br/>{ name }</div>
                </div>
            ))} */}
          <div className="p-2 lg:py-0 grid grid-cols-1">
            <div className="col-span-full text-center
                      grid grid-cols-1 lg:grid-cols-8 gap-y-3
                      m-1 md:m-3 xl:m-5 p-2 md:p-5 xl:p-7
                      border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg
                      transition ease-in-out duration-300">
              <div className="font-bold lg:text-end text-elanco text-2xl md:text-3xl lg:text-5xl col-span-3 self-end">Behavior{/* name */}</div>
              <div className="p-5 w-full aspect-video rounded-md row-span-2 col-span-5 ml-2">
                <img
                  src="/LogoWhite.png"
                  alt="Elanco Logo"
                  className="bg-elanco"
                />
              </div>
              <div className="text-base lg:text-end col-span-3">Description</div>
            </div>
          </div>

          <div className="h-96 lg:h-[330px] carousel carousel-vertical rounded-box px-2">
            <div className="carousel-item h-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 ">
              {names.map((name) => (
                    <div data-href="../data/specific" className={`
                            ${style.card} flex flex-col h-fit
                            m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                            border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                            transition ease-in-out duration-300
                            `}>
                        <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">{ name }</div>
                        {/* <div className="lg:hidden">This is the content of<br/>{ name }</div> */}
                        <div className={style.data}>
                            <div className={style.min}>
                              <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">7200.00</div>
                              <div>Minimum</div>
                            </div>
                            <div className={style.average}>
                              <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">8700.00</div>
                              <div>Average</div>
                            </div>
                            <div className={style.max}>
                              <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">9000.00</div>
                              <div>Maximum</div>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
            </div>

        </div>
        
        <div className="carousel w-full">
          
          <div id="item1" className="carousel-item w-full">
            <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 w-full lg:h-[330px]">
              {names.map((name) => (
                <div data-href="../data/specific" className={`
                        ${style.card} flex flex-col h-fit
                        m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                        border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                        transition ease-in-out duration-300
                        `}>
                    <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">{ name }</div>
                    {/* <div className="lg:hidden">This is the content of<br/>{ name }</div> */}
                    <div className={style.data}>
                        <div className={style.min}>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">7200.00</div>
                          <div>Minimum</div>
                        </div>
                        <div className={style.average}>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">8700.00</div>
                          <div>Average</div>
                        </div>
                        <div className={style.max}>
                          <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">9000.00</div>
                          <div>Maximum</div>
                        </div>
                    </div>
                </div>
              ))}
            </div> 
          </div>

          <div id="item2" className="carousel-item w-full">
            <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 w-full lg:h-[330px]">
                {names.map((name) => (
                  <div data-href="../data/specific" className={`
                          ${style.card} flex flex-col h-fit
                          m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                          border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                          transition ease-in-out duration-300
                          `}>
                      <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">{ name }</div>
                      {/* <div className="lg:hidden">This is the content of<br/>{ name }</div> */}
                      <div className={style.data}>
                          <div className={style.min}>
                            <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">7200.00</div>
                            <div>Minimum</div>
                          </div>
                          <div className={style.average}>
                            <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">8700.00</div>
                            <div>Average</div>
                          </div>
                          <div className={style.max}>
                            <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">9000.00</div>
                            <div>Maximum</div>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
          </div>

        </div>
         
        <div className="join justify-center w-full py-2">
          <a href="#item1" className="join-item btn btn-sm bg-elanco text-white hover:bg-white hover:text-elanco border-0 border-r-2">1</a> 
          <a href="#item2" className="join-item btn btn-sm text-elanco bg-white hover:bg-white hover:text-elanco shadow-sm hover:shadow-lg border-none">2</a> 
        </div>
      </div>
    </main>
  );
}
