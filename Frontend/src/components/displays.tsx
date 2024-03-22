"use client";
import React, { useEffect } from "react";
import style from "@/app/design-framework/data/overview/style.module.css";

type dataCard = {
  title: string;
  min: number;
  average: number;
  max: number;
  units: string;
  href: string;
};

type props = {
  props: [dataCard];
};

export const DashboardDisplays = (props: props) => {
  const firstHalf = props.props.slice(0, 3);
  const secondHalf = props.props.slice(3, 6);

  useEffect(() => {
    let cards = Array.from(document.getElementsByClassName(style.card));
    cards.forEach((card) => {
      let href = card.getAttribute("data-href") || "#";
      if (window.matchMedia("(any-pointer:fine").matches) {
        card.addEventListener("mouseenter", function () {
          card.classList.add(style.hover);
        });
        card.addEventListener("mouseleave", function () {
          card.classList.remove(style.hover);
        });
        card.addEventListener("click", function () {
          window.location.assign(href);
        });
      }

      if (window.matchMedia("(any-pointer:coarse").matches) {
        card.addEventListener("touchstart", function () {
          card.classList.add(style.hover);
        });
        card.addEventListener("touchend", function () {
          card.classList.remove(style.hover);
        });
        card.addEventListener("click", function () {
          window.location.assign(href);
        });
      }
    });
  });

  return (
    <>
      <div className="carousel w-full">
        <div id="set1" className="carousel-item w-full">
          <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 w-full lg:h-[330px]">
            {firstHalf.map((row: dataCard) => (
              <div
                key={row.title}
                data-href={"../" + row.href}
                className={`
                      ${style.card} flex flex-col h-fit
                      m-1 md:m-3 lg:mx-1 xl:mx-3 p-2 md:p-3 xl:p-5
                      border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                      transition ease-in-out duration-300
                      `}
              >
                <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">
                  {row.title}
                  {row.title == "Steps" ? (
                    <span className="text-gray-600 font-normal text-sm">
                      {" "}
                      per day
                    </span>
                  ) : (
                    <></>
                  )}
                </div>

                <div className={style.data}>
                  <div className={style.min}>
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.min}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Minimum</div>
                  </div>
                  <div className={style.average}>
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.average}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Average</div>
                  </div>
                  <div className={style.max}>
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.max}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-xl">{row.units} </span>
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
            {secondHalf.map((row: dataCard) => (
              <div
                key={row.title}
                data-href={"../" + row.href}
                className={`
                      ${style.card} flex flex-col h-fit
                      m-1 md:m-3 lg:mx-1 xl:mx-3 p-2 md:p-3 xl:p-5
                      border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg outline-elanco text-center
                      transition ease-in-out duration-300
                      `}
              >
                <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">
                  {row.title}
                  {row.title == "Steps" ? (
                    <span className="text-gray-600 font-normal text-sm">
                      {" "}
                      per day
                    </span>
                  ) : (
                    <></>
                  )}
                </div>

                <div className={style.data}>
                  <div className={style.min}>
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.min}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Minimum</div>
                  </div>
                  <div className={style.average}>
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.average}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-xl">{row.units} </span>
                      )}
                    </div>
                    <div>Average</div>
                  </div>
                  <div className={style.max}>
                    <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                      {row.max}{" "}
                      {row.units != "" && (
                        <span className="-ml-5 text-xl">{row.units} </span>
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
