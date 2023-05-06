const GroupPageSkeleton = () => {
  return (
    <div className="bg-black text-white pt-4 px-4 pb-8 min-h-screen">
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center px-4 gap-x-4 md:px-6 mb-4">
          <div className="my-4 h-9 w-60 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out">
          </div>
          <div className="h-9 w-48 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out"></div>
        </div>
        <div className="flex flex-wrap gap-6 justify-around mx-auto">
        {Array.from({ length: 20 }).map((item, i) => (
          <div
            key={i}
            className="flex flex-col grow-0 shrink-0 basis-auto relative w-48 h-72 md:h-96 md:w-60 xl:w-64 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out"
          >
          </div>
        ))}
        </div>
      </div>
      <div className="flex justify-center gap-x-4 mt-8 mb-4">
        <div className="w-36 sm:w-40 h-12 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out"></div>
        <div className="w-36 sm:w-40 h-12 bg-gradient-to-r from-gray-900 to-gray-700 animate-pulse duration-2 ease-in-out"></div>
      </div>
    </div>
  )
}

export default GroupPageSkeleton;