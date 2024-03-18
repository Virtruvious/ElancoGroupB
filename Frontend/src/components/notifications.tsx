'use client';
import { useState } from "react";

export default function Notification({side}:{side:boolean}) {
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
      ]);
    
      const markRead = (index:number) => {
        const updatedNotifs = [...notifications]
        updatedNotifs[index].read = true;
        setNotifications(updatedNotifs)
      };

  return (
    <div className="flex flex-col">
        <div className={`relative text-center text-elanco ${side ? "text-4xl":"text-4xl md:text-5xl lg:text-6xl"} font-bold p-3`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={`inline ${side ? "size-8":"size-8 md:size-10 lg:size-12"} pb-2`}>
                <path fill="currentColor" d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z" />
            </svg>
            Notification
            <div className={`${side ? "hidden": "absolute"} top-2 right-2 cursor-pointer`} id="hideNoti">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-8 md:size-10">
                    <path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        {notifications.map((noti, index) => (
        <div className={`border-y-2 p-3 ${noti.read ? "opacity-60": "cursor-pointer"}`} onClick={() => markRead(index)}>
            <div className={`text-elanco ${side ? "text-3xl":"text-3xl lg:text-4xl"} font-semibold`}>{noti.title}</div>
            <div className="text-md">Here comes description.</div>
            <div><span className="text-elanco font-semibold">Date: </span>18.3.2024</div>
        </div>
        ))}
    </div>
  );
}