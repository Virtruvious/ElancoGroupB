export default function LoginPage(){

return (
    <div className="w-screen h-screen flex flex-col sm:flex-row">
        <div className="bg-elanco w-full sm:w-1/2 flex justify-center items-center">
            <img
                 src="/LogoWhite.png"
                alt="Elanco Logo"
                className="p-5 mb-10 w-[40rem] w-full"
            />
        </div>
        <div className="bg-white w-full sm:w-1/2 flex justify-center items-center"> 
            <div className="min-h-screen w-full bg-gray-100 text-gray-800 antialiased px-4 py-3 flex flex-col justify-center sm:py-120">
            <div className="relative py-3 sm:max-w-xl mx-auto text-center">
                <span className="text-2xl font-white">Login to your account</span>

                <input type="text" placeholder="Username" className=" border w-full h-15 px-5 py-5 mt-2  hover:outline-none focus:outline-none focus:ring-1 focus:ring-elanco-600 rounded-md"></input>

                <input type="text" placeholder="Password" className=" border w-full h-15 px-5 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-elanco-600 rounded-md"></input>

                <div className="flex justify-between items-baseline">
                <button className="mt-4 border-2 border-elanco px-10 py-2 w-full">Login</button>
          </div>
          </div>
        </div>
        </div>
    </div>
)}