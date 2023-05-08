const MovieGroupSkeleton = () => {
  return (
    <div className="bg-black py-4 px-3">
      <div className="flex items-center flex-wrap justify-between mb-4 px-4 gap-2">
        <h2 className="w-52 sm:w-80 h-9 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out">
        </h2>
        <p className="w-32 sm:w-40 h-8 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out"></p>
      </div>
      <div className="flex gap-x-4 overflow-y-hidden overflow-x-scroll">
        {Array.from({ length: 10 }).map((item, i) => (
          <div
            key={i}
            className="flex flex-col grow-0 shrink-0 basis-auto relative w-48 h-72 md:h-96 md:w-60 xl:w-64 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out"
          >
          </div>
        ))}
        <div
          className="flex flex-col grow-0 shrink-0 basis-auto relative w-48 h-72 md:h-96 md:w-60 xl:w-64 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out"
          >
          </div>
      </div>
    </div>
  );
};

export default MovieGroupSkeleton;
