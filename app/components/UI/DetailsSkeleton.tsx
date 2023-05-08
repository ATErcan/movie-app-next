const DetailsSkeleton = () => {
  return (
    <section className="bg-neutral-900 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-x-4 py-4 px-8 justify-between tems-center">
          <div className="w-44 h-9 md:w-96 loading-shimmer animate-pulse"></div>
          <div className="w-28 h-8 md:w-72 loading-shimmer animate-pulse"></div>
        </div>

        <div className="flex md:gap-x-1.5">
          <div className="hidden md:block md:w-1/3 lg:w-1/5 md:h-80 lg:h-96 loading-shimmer animate-pulse"></div>
          <div className="w-full h-80 md:w-2/3 lg:w-4/5 lg:h-96 loading-shimmer animate-pulse"></div>
        </div>

        {/* Details */}
        <div className="flex flex-col p-4 md:py-4 md:px-8 xl:py-8 xl:px-0">
          <div className="flex flex-wrap my-1 gap-x-2">
            {Array.from({ length: 3 }).map((item, i) => (
              <div key={i} className="w-32 h-7 rounded-lg loading-shimmer animate-pulse"></div>
            ))}
          </div>
          <p className="mb-4 w-4/5 h:8 loading-shimmer animate-pulse"></p>
          <p className="w-full h-8 loading-shimmer animate-pulse"></p>
          <p className="w-full h-8 loading-shimmer animate-pulse"></p>
          <p className="w-full h-8 loading-shimmer animate-pulse"></p>
          <div className="flex flex-wrap justify-center gap-x-4 my-4 lg:my-8">
            {Array.from({ length: 4 }).map((item, i) => (
              <div
                key={i}
                className="grow-0 shrink-0 basis-36 flex flex-col items-center gap-y-2"
              >
                <div className="flex justify-center items-center w-12 h-12 rounded-full overflow-hidden loading-shimmer animate-pulse"></div>
                <p className="w-24 h-6 loading-shimmer animate-pulse"></p>
              </div>
            ))}
          </div>
        </div>

        {/* Cast */}
        <div className="px-4 mb-8 xl:p-0">
          <div className="w-64 h-8 loading-shimmer animate-pulse"></div>
          <div className="flex gap-x-4 overflow-y-hidden overflow-x-auto py-4">
            {Array.from({ length: 10 }).map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center grow-0 shrink-0 basis-auto h-auto gap-y1.5"
              >
                <div className="w-24 h-24 rounded-full sm:w-28 sm:h-28 md:w-36 md:h-36 loading-shimmer animate-pulse"></div>
                <div className="w-44 h-6 loading-shimmer animate-pulse"></div>
                <div className="w-48 h-5 loading-shimmer animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 mb-8 xl:p-0">
          <div className="w-64 h-8 loading-shimmer animate-pulse"></div>
          <div className="flex gap-x-4 overflow-y-hidden overflow-x-auto py-4">
            {Array.from({ length: 10 }).map((item, i) => (
              <div
                key={i}
                className="flex flex-col grow-0 shrink-0 basis-auto relative w-48 h-72 md:h-96 md:w-60 xl:w-64 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out"
              ></div>
            ))}
          </div>
        </div>

        {/* GoBackBtn */}
        <div className="px-4 xl:p-0">
          <button className="w-24 h-7 cursor-default py-2 px-4 rounded-md loading-shimmer animate-pulse"></button>
        </div>
      </div>
    </section>
  );
};

export default DetailsSkeleton;
