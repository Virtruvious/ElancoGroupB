"use client";
import React, { useEffect, useState } from "react";
import style from "@/app/design-framework/data/overview/style.module.css";

export const DashboardDisplays = (props: any) => {
  const firstHalf = props.props.slice(0, 3);
  const secondHalf = props.props.slice(3, 6);
  const [currentSet, setCurrentSet] = useState(firstHalf);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSet[0].title === "Heart Rate") {
        setCurrentSet(secondHalf);
      } else {
        setCurrentSet(firstHalf);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [currentSet]);

  return (
    <div className="px-2 grid grid-cols-1 lg:grid-cols-3 items-center gap-y-3 lg:h-[330px]">
      {currentSet.map((row: any) => (
        <a
          key={row.title}
          href="../data/specific"
          className={`
                      ${style.card} flex flex-col h-fit
                      m-1 md:m-3 xl:mx-5 p-2 md:p-3 xl:p-5
                      border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-lg focus:shadow-lg outline-elanco text-center
                      transition ease-in-out duration-300
                      `}
        >
          <div className="font-bold text-elanco text-xl md:text-2xl xl:text-3xl">
            {row.title}
          </div>

          <div className={style.data}>
            <div className={style.min}>
              <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                {row.min}
              </div>
              <div>Minimum</div>
            </div>
            <div className={style.average}>
              <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                {row.average}
              </div>
              <div>Average</div>
            </div>
            <div className={style.max}>
              <div className="items-center text-5xl font-bold text-elanco justify-center font-mono">
                {row.max}
              </div>
              <div>Maximum</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
