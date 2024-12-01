
import heroImage from "/images/mtaa_mall-removebg-preview.png"

function Home() {
  return (
    <>
      <div className="h-[80%] bg-slate-200 flex justify-center items-center">
        <div
          className="w-full max-w-[95%] my-3 md:my-10 rounded-md md:rounded-2xl bg-gradient-to-r from-slate-400 via-purple-400 to-pink-500 shadow-xl overflow-hidden"
          style={{ minHeight: "700px" }}
        >
          <div className="md:flex justify-between items-center text-center md:text-left">
            {/* Main Content */}
            <div className="p-8 md:p-20 flex flex-col justify-center">
              <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-snug md:leading-tight">
                Your One <br />
                <span className="block md:inline text-pink-300">Stop Shop</span>
              </h1>
              <p className="text-white text-base sm:text-lg md:text-2xl mt-4">
                Discover everything you need in one place, with style and simplicity.
              </p>
              <button
                className="w-1/2 mt-6 sm:mt-8 px-5 sm:px-6 py-2 sm:py-3 bg-white text-purple-500 font-bold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out"
              >
                Shop with us today
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center p-4">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="A visual representation of simplicity and style"
                  className="rounded-lg shadow-md transform hover:scale-105 transition duration-300 max-w-[90%] sm:max-w-full"
                  loading="lazy"
                />
                {/* Floating Text */}
                <div className="absolute bottom-4 right-4 sm:right-6 text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl italic opacity-90">
                  Simple IS More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home