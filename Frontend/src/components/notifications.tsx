"use client";
import moment from "moment";

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

export default function Notification({
  notifications,
  side,
  markRead,
}: {
  notifications: Notifications;
  side: boolean;
  markRead: (index: number, id: number) => void;
}) {
  return (
    <div className="flex flex-col">
      <div
        className={`relative text-center text-elanco ${
          side ? "text-4xl" : "text-4xl md:text-5xl lg:text-6xl"
        } font-bold p-3`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={`inline ${
            side ? "size-8" : "size-8 md:size-10 lg:size-12"
          } pb-2`}
        >
          <path
            fill="currentColor"
            d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z"
          />
        </svg>
        Notifications
        <div
          className={`${
            side ? "hidden" : "absolute"
          } top-2 right-2 cursor-pointer`}
          id="hideNoti"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="size-8 md:size-10"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="4"
              d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="relative w-full h-full">
        {notifications[0].id === 0 && (
          <div className="absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center blur-none">
            <div className="text-3xl font-bold text-elanco animate-pulse">
              Loading...
            </div>
          </div>
        )}
        <div className={`${notifications[0].id === 0 ? "blur-md" : ""}`}>
          {notifications.map((notif, index) => (
            <div
              key={index}
              className={`border-y-2 p-3 ${
                notif.markedRead ? "opacity-60" : "cursor-pointer"
              }`}
              onClick={() => markRead(index, notif.id)}
            >
              <div
                className={`text-elanco ${
                  side ? "text-3xl" : "text-3xl lg:text-4xl"
                } font-semibold`}
              >
                {notif.title}
              </div>
              <div className="text-md pb-3">{notif.description}</div>
              <div className="opacity-50">
                {moment(notif.date).format("MMMM Do YYYY ha")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
