"use client";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import Notification from "@/components/notifications";
import { NotifRequest, readNotif } from "@/components/notifRequest";
import { DogEngine } from "@/components/dogEngine";
import { setInterval } from "timers";
import { useRef } from "react";

type Notifications = [
  {
    id: number;
    date: string;
    title: string;
    description: string;
    markedRead: boolean;
    Dog_id: number;
  }
];

type LiveData = {
  behaviour: string;
  stats: [
    {
      title: string;
      value: number;
    },
    {
      title: string;
      value: number;
    },
    {
      title: string;
      value: number;
    }
  ];
};

export default function Home() {
  const [notifications, setNotifications] = useState<Notifications>([
    {
      id: 0,
      date: "2024-01-01T00:00:00.000Z",
      title: "Loading...",
      description: "We'll get your notifications soon!",
      markedRead: false,
      Dog_id: 0,
    },
  ]);

  const [liveData, setLiveData] = useState<LiveData>({
    behaviour: "",
    stats: [
      {
        title: "Heart Rate",
        value: 0,
      },
      {
        title: "Temperature",
        value: 0,
      },
      {
        title: "Breathing Rate",
        value: 0,
      },
    ],
  });

  async function fetchLiveData() {
    const result = await DogEngine();
    setLiveData(result);
  }

  async function fetchData() {
    const result = await NotifRequest();
    setNotifications(result);
  }

  useEffect(() => {
    fetchData();
    fetchLiveData();
  }, []);

  useInterval(() => {
    fetchLiveData();
  }, 30000);

  const markRead = (index: number, id: number) => {
    const temp = [...notifications] as Notifications;
    temp[index].markedRead = true;
    setNotifications(temp);

    readNotif(id);
  };

  const getNumUnread = () => {
    if (notifications === null) return 0;

    let count = 0;
    notifications.forEach((notif) => {
      if (!notif.markedRead) count++;
    });

    return count;
  };

  useEffect(() => {
    const showNotification = document.getElementById("showNoti");
    const hideNotification = document.getElementById("hideNoti");
    const displayNotification = document.getElementById("notifications");
    if (showNotification && displayNotification && hideNotification) {
      showNotification.addEventListener("click", function () {
        displayNotification.classList.remove("ml-[100%]");
      });
      hideNotification.addEventListener("click", function () {
        displayNotification.classList.add("ml-[100%]");
      });
    }

    const displayData = document.getElementById("displayData");
    const toggleData = document.getElementById("toggleData");
    const icon = document.getElementById("toggleIcon");
    if (displayData && toggleData && icon) {
      toggleData.addEventListener("click", function (e) {
        displayData.classList.toggle("-mb-36");
        displayData.classList.toggle("sm:-mb-40");
        displayData.classList.toggle("md:-mb-44");
        displayData.classList.toggle("lg:-mb-48");
        icon.classList.toggle("rotate-180");
        e.stopImmediatePropagation();
      });
    }
  });

  // Sourced from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  // Helps elviaite the the issues faced with setInterval
  function useInterval(callback: () => void, delay: number) {
    const savedCallback = useRef(callback);

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <main className="flex flex-row min-h-dvh">
      <Sidebar />
      <div className="bg-white text-black w-full h-dvh p-1 sm:p-2 overflow-y-scroll scroll-smooth ml-[72px] md:ml-[244px]">
        <div className="mx-1 md:mx-3 xl:mx-5 p-2 pb-1">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">
            Hello User!
          </div>
          <div className="text-lg">Let's see how your dog is doing today!</div>
        </div>
        <div className="grid grid-cols-3 gap-3 px-3 md:px-4 lg:px-5 min-h-96 h-[calc(100dvh-120px)]">
          <div className="relative overflow-hidden col-span-full xl:col-span-2 border-2 rounded-md">
            <div
              className="absolute xl:hidden top-3 right-3 text-elanco cursor-pointer"
              id="showNoti"
            >
              {getNumUnread() === 0 && (
                <div className={`relative`}>
                  <span className="absolute flex h-4 w-4 -top-1 right-0">
                    <span className="custom-ping absolute inline-flex badge badge-error badge-md aspect-square opacity-75"></span>
                    <span className="badge inline-flex badge-error badge-md aspect-square text-white">
                      {getNumUnread()}
                    </span>
                  </span>
                </div>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="size-8"
              >
                <path
                  fill="currentColor"
                  d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z"
                />
              </svg>
            </div>

            <div
              id="notifications"
              className=" absolute ml-[100%] xl:-right-full w-full h-full rounded-md z-10
                            bg-white/90 overflow-y-scroll notifications
                            transition-all duration-500"
            >
              <Notification
                notifications={notifications}
                side={false}
                markRead={markRead}
              ></Notification>
            </div>

            <div
              className="absolute w-full  z-auto
                            bottom-0 -mb-36 sm:-mb-40 md:-mb-44 lg:-mb-48
                            transition-all duration-700 ease-in-out"
              id="displayData"
            >
              <div className="bg-slate-400 cursor-pointer" id="toggleData">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="size-6 mx-auto transition-transform duration-500"
                  id="toggleIcon"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="m13 30l12-12l12 12"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-3 h-36 sm:h-40 md:h-44 lg:h-48 bg-white">
                {liveData.stats.map((row, index) => (
                  <div
                    className="flex flex-col border-2 text-center justify-center"
                    key={index}
                  >
                    <div className="text-elanco text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold break-words">
                      {row.title}
                    </div>
                    <div className="text-elanco text-4xl sm:text-5xl md:text-6xl font-bold">
                      {row.value}
                    </div>
                    <div className="text-base md:text-lg">Current</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-md lg:text-lg">Your dog is currently</div>
              <img
                src={`/dog${liveData.behaviour}.jpg`}
                alt="dog img"
                className="size-48"
              />
              <div className="text-elanco text-5xl lg:text-6xl font-bold">
                {liveData.behaviour}
              </div>
            </div>
          </div>
          <div className="hidden xl:block border-2 rounded-md overflow-y-scroll notifications">
            <Notification
              notifications={notifications}
              side={true}
              markRead={markRead}
            ></Notification>
          </div>
        </div>
      </div>
    </main>
  );
}
