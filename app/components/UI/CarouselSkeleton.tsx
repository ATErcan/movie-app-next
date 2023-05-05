const CarouselSkeleton = () => {
  return (
    <div className="relative sm:min-h-screen">
      <div className="absolute inset-0 bg-white-300 bg-gradient-to-r from-gray-500 to-gray-800 animate-pulse duration-2 ease-in-out"></div>
      <div className="relative h-48 xxs:h-64 xs:h-96 sm:static sm:h-auto">
        <div className="absolute inset-0 bg-white-300 bg-gradient-to-r from-gray-500 to-gray-600 animate-pulse duration-2 ease-in-out"></div>
      </div>

      <div className="flex flex-col gap-y-4 p-4 bg-black text-white sm:absolute sm:top-1/2 sm:transform sm:-translate-y-1/2  sm:bg-transparent sm:p-8 xl:pl-16">
        <div>
          <ul className="flex flex-wrap gap-x-3 gap-y-2">
            {[1, 2, 3].map((item) => {
              return (
                <li
                  key={item}
                  className="px-3 py-2 bg-gray-300 bg-opacity-30 w-20 h-10 animate-pulse duration-2 ease-in-out rounded-3xl text-xs sm:text-base sm:backdrop-blur-lg xl:text-xl xl:py-3 xl:px-4 2xl:text-2xl"
                ></li>
              );
            })}
          </ul>
        </div>
        <h2 className="w-44 xs:w-72 sm:w-96 rounded-md h-14 animate-pulse bg-gray-400 duration-2 ease-in-out text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl"></h2>
        <p className="p-2 bg-yellow-500 font-bold animate-pulse duration-1 w-8 h-8 ease-in-out text-gray-500 shadow sm:p-2.5 sm:text-xl xl:text-2xl 2xl:text-3xl"></p>
        <button className="bg-white text-black border-none rounded-2xl w-32 py-4 h-8 cursor-default animate-pulse duration-2 ease-in-out sm:py-1.5 sm:w-36 2xl:text-base"></button>
      </div>
    </div>
  );
};

export default CarouselSkeleton;
