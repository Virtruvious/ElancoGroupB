'use client';
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import Notification from "@/components/notifications";

export default function Home() {
  const [notifications, setNotifications] = useState([
    {
      title:"Heart Rate",
      read:false
    },
    {
      title:"Temp",
      read:false
    },
    {
      title:"Breathing",
      read:true
    },
    {
      title:"Heart Rate",
      read:false
    },
    {
      title:"Temp",
      read:false
    },
    {
      title:"Breathing",
      read:true
    }
  ])

  const markRead = (index:number) => {
    const updatedNotifs = [...notifications]
    updatedNotifs[index].read = true;
    setNotifications(updatedNotifs)
  }

  useEffect(() => {
    const showNotification = document.getElementById("showNoti");
    const hideNotification = document.getElementById("hideNoti");
    const displayNotification = document.getElementById("notifications");
    if (showNotification && displayNotification && hideNotification) {
      showNotification.addEventListener("click", function() {
        displayNotification.classList.remove("ml-[100%]");
      })
      hideNotification.addEventListener("click", function() {
        displayNotification.classList.add("ml-[100%]");
      })
    }

    const displayData = document.getElementById("displayData");
    const toggleData = document.getElementById("toggleData");
    const icon = document.getElementById("toggleIcon")
    if (displayData && toggleData && icon) {
      toggleData.addEventListener("click", function(e) {
        displayData.classList.toggle("-mb-36");
        displayData.classList.toggle("sm:-mb-40");
        displayData.classList.toggle("md:-mb-44");
        displayData.classList.toggle("lg:-mb-48");
        icon.classList.toggle("rotate-180");
        e.stopImmediatePropagation();
      });
    }
  });

  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white text-black w-full h-dvh p-1 sm:p-2 overflow-y-scroll scroll-smooth ml-[72px] md:ml-[244px]">
        <div className="mx-1 md:mx-3 xl:mx-5 p-2 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">
            Hello User!
          </div>
          <div className="text-lg">Let's see how your dog is doing today!</div>
        </div>
        <div className="grid grid-cols-3 gap-3 px-2 min-h-96 h-[calc(100dvh-120px)]">
            <div className="relative overflow-hidden
                            col-span-full xl:col-span-2
                            border-2 rounded-md">
              {/* <div className="absolute top-2 left-2
                              text-elanco cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" className="size-8">
                  <g stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-width="3">
                    <path d="M5 5H19">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur=".50s" values="24;0" />
                    </path>
                    <path d="M5 12H19">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin=".2s" dur=".5s" values="24;0" />
                    </path>
                    <path d="M5 19H19">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin=".35s" dur=".25s" values="24;0" />
                    </path>
                  </g>
                </svg>
              </div> */}
              
              <div className="absolute xl:hidden top-2 right-2
                              text-elanco cursor-pointer"  id="showNoti">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="size-8">
                  <path fill="currentColor" d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z" />
                </svg>
              </div>
              
              <div 
                id="notifications"
                className=" absolute ml-[100%] xl:-right-full w-full h-full rounded-md z-10
                            bg-white/90 overflow-y-scroll notifications
                            transition-all duration-500">
                {/* <div className="flex flex-col">
                  <div className="relative text-center text-elanco text-4xl md:text-5xl lg:text-6xl font-bold p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="inline size-8 md:size-10 lg:size-12 pb-2">
                      <path fill="currentColor" d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z" />
                    </svg>
                    Notification
                  </div>
                  {notifications.map((noti, index) => (
                    <div className={`border-y-2 p-3 ${noti.read ? "opacity-60": "cursor-pointer"}`} onClick={() => markRead(index)}>
                      <div className="text-elanco text-3xl lg:text-4xl font-semibold">{noti.title}</div>
                      <div className="text-md">Here comes description.</div>
                      <div><span className="text-elanco font-semibold">Date: </span>18.3.2024</div>
                    </div>
                  ))}
                </div> */}
                <Notification side={false}></Notification>
              </div>

              <div
                className="absolute w-full  z-auto
                            bottom-0 -mb-36 sm:-mb-40 md:-mb-44 lg:-mb-48
                            transition-all duration-700 ease-in-out"
                id="displayData">
                <div className="bg-slate-400 cursor-pointer" id="toggleData">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-6 mx-auto transition-transform duration-500" id="toggleIcon">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m13 30l12-12l12 12" />
                  </svg>
                </div>
                <div className="grid grid-cols-3 h-36 sm:h-40 md:h-44 lg:h-48 bg-white">
                  <div className="flex flex-col border-2 text-center justify-center">
                   <div className="text-elanco text-2xl md:text-3xl font-bold">HeartRate</div>
                    <div className="text-elanco text-5xl lg:text-6xl font-bold">78</div>
                    <div className="text-md lg:text-lg">Current</div>                    
                  </div>
                  <div className="flex flex-col border-2 text-center justify-center">
                    <div className="text-elanco text-2xl md:text-3xl font-bold">HeartRate</div>
                    <div className="text-elanco text-5xl lg:text-6xl font-bold">78</div>
                    <div className="text-lg">Current</div>                    
                  </div>
                  <div className="flex flex-col border-2 text-center justify-center">
                    <div className="text-elanco text-2xl md:text-3xl font-bold">HeartRate</div>
                    <div className="text-elanco text-5xl lg:text-6xl font-bold">78</div>
                    <div className="text-lg">Current</div>                    
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center h-full">
                <div className="text-md lg:text-lg">Your dog is currently</div>
                <img
                  src=""
                  alt="dog img"
                  className="bg-orange-400 size-48"/>
                <div className="text-elanco text-5xl lg:text-6xl font-bold">Sleeping</div>
              </div>
            </div>
            <div className="hidden xl:block border-2 rounded-md overflow-y-scroll notifications">
              <Notification side={true}></Notification>
            </div>
        </div>        
      </div>
    </main>
  );
}