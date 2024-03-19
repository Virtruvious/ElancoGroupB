import Sidebar from "@/components/sidebar";

export default function Unwrapped() {

    const slides = [
        {
            description: "Your dog ran the distance equivalent to",
            main: "2 times that of earth's circumference!",
            bgColor: "bg-gradient-to-bl from-cyan-500 to-blue-600",
            txtColor: "text-black"
        },
        {
            description: "The total calorie intake of your dog is equivalent to",
            main: "183 times less than calorie intake of a whale per day!",
            bgColor: "bg-gradient-to-br from-purple-500 to-violet-900",
            txtColor: "text-white"
        },
        {
            description: "Your dog slept total of",
            main: "4837 hours!",
            bgColor: "bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500",
            txtColor: "text-white"
        },
        {
            description: "Your dog mostly did",
            main: "Running :)",
            bgColor: "bg-gradient-to-tr from-[#FDFCFB] to-[#E2D1C3]",
            txtColor: "text-black"
        }
    ]

  return (
    <main className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="bg-white text-black w-full h-dvh p-1 sm:p-2 overflow-y-scroll scroll-smooth ml-[72px] md:ml-[244px]">
        <div className="mx-1 md:mx-3 xl:mx-5 p-2 pb-5">
          <div className="font-extrabold text-elanco text-3xl md:text-4xl xl:text-5xl">
            2023 Unwrapped!
          </div>
          {/* <div className="text-lg">Let's see how your dog is doing this year!</div> */}
        </div>

        <div className="px-2 md:px-4 lg:px-5">
            <div className="carousel w-full h-[calc(100dvh-100px)] rounded-2xl shadow-2xl">
                {slides.map((slide, index) => (
                    <div id={`slide${index}`} className="carousel-item relative w-full">
                        <div className={`flex flex-col gap-10 justify-center items-center w-full h-full ${slide.bgColor}`}>
                            <div className={`${slide.txtColor} text-center text-md lg:text-lg px-14`}>{slide.description}</div>
                            <img
                            src=""
                            alt="dog img"
                            className="bg-orange-400 size-48"/>
                            <div className={`${slide.txtColor} text-center text-3xl md:text-5xl lg:text-6xl font-bold px-14`}>{slide.main}</div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${index == 0 ? slides.length-1 : index-1}`} className="unwrapped-btn">❮</a> 
                            <a href={`#slide${index == slides.length-1 ? 0 : index+1}`} className="unwrapped-btn">❯</a>
                        </div>
                    </div> 
                ))}
                {/* <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col gap-10 justify-center items-center w-full h-full bg-gradient-to-bl from-cyan-500 to-blue-600">
                        <div className="text-md lg:text-lg">Your dog is currently</div>
                        <img
                        src=""
                        alt="dog img"
                        className="bg-orange-400 size-48"/>
                        <div className="text-black text-5xl lg:text-6xl font-bold">Sleeping</div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="unwrapped-btn">❮</a> 
                        <a href="#slide2" className="unwrapped-btn">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col gap-10 justify-center items-center w-full h-full bg-gradient-to-br from-purple-500 to-violet-900">
                        <div className="text-white lg:text-lg">Your dog is currently</div>
                        <img
                        src=""
                        alt="dog img"
                        className="bg-blue-400 size-48"/>
                        <div className="text-white text-5xl lg:text-6xl font-bold">Sleeping</div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="unwrapped-btn">❮</a> 
                        <a href="#slide3" className="unwrapped-btn">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col gap-10 justify-center items-center w-full h-full bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500">
                        <div className="text-white text-md lg:text-lg">Your dog is currently</div>
                        <img
                        src=""
                        alt="dog img"
                        className="bg-blue-400 size-48"/>
                        <div className="text-white text-5xl lg:text-6xl font-bold">Sleeping</div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="unwrapped-btn">❮</a> 
                        <a href="#slide4" className="unwrapped-btn">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col gap-10 justify-center items-center w-full h-full bg-gradient-to-tr from-[#FDFCFB] to-[#E2D1C3]">
                        <div className="text-md lg:text-lg">Your dog is currently</div>
                        <img
                        src=""
                        alt="dog img"
                        className="bg-blue-400 size-48"/>
                        <div className="text-5xl lg:text-6xl font-bold">Sleeping</div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="unwrapped-btn">❮</a> 
                        <a href="#slide1" className="unwrapped-btn">❯</a>
                    </div>
                </div> */}
            </div>
        </div>
        
      </div>
    </main>
  );
}