import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";
import axios from "axios";
import { DogRunning, DogBowl, DogWater, DogBreath, DogLight } from "../../../public/svg";

type Slide = {
  description: string;
  main: string;
  bgColour: string;
  txtColour: string;
  icon: any;
};

interface IconMap {
  [key: string]: (props: string) => JSX.Element;
}

export default async function Unwrapped() {
  const session = await getServerSession(authOptions);
  if (session === null) {
    redirect("/login");
  }

  const response = await axios.get(
    "http://localhost:8000/notifs/getUnwrapped",
    {
      headers: {
        Authorization: `Bearer ${session?.jwt}`,
        "Content-Type": "application/json",
      },
    }
  );
  const slides = response.data;

  const icons: IconMap = {
    DogRunning: (props) => <DogRunning props={props}/>,
    DogBowl: (props) => <DogBowl props={props}/>,
    DogWater: (props) => <DogWater props={props}/>,
    DogBreath: (props) => <DogBreath props={props}/>,
    DogLight: (props) => <DogLight props={props}/>,
  };

  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white text-black w-full h-dvh p-1 sm:p-2 overflow-y-scroll scroll-smooth ml-[72px] md:ml-[244px]">
        <div className="mx-1 md:mx-3 xl:mx-5 p-2 pb-5">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">
            2021-2023 Unwrapped!
          </div>
        </div>

        <div className="px-2 md:px-4 lg:px-5">
          <div className="carousel w-full h-[calc(100dvh-100px)] rounded-2xl shadow-2xl">
            {slides.map((slide:Slide, index:number) => (
              <div
                key={index}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <div
                  className={`flex flex-col gap-10 justify-center items-center w-full h-full ${slide.bgColour}`}
                >
                  <div
                    className={`${slide.txtColour} text-center text-md lg:text-5xl font-semibold px-14`}
                  >
                    {slide.description}
                  </div>

                  <div className="w-40 h-40">
                    {icons[slide.icon](slide.txtColour)}
                  </div>

                  <div
                    className={`${slide.txtColour} text-center text-3xl md:text-5xl lg:text-6xl font-bold px-14`}
                  >
                    {slide.main}
                  </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slide${index == 0 ? slides.length - 1 : index - 1}`}
                    className="unwrapped-btn"
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${index == slides.length - 1 ? 0 : index + 1}`}
                    className="unwrapped-btn"
                  >
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
