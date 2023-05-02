import { baseImgUrl } from "@/assets/tmdb";
import Image from "next/image"

const Preview = ({ movie }: { movie: MovieData | null}) => {
  return (
    <div className="relative mt-2 overflow-y-hidden">
      <Image src={`${baseImgUrl}${movie?.backdrop_path}`} alt="movie" width={600} height={400} className="w-full" />
      <div className="flex flex-col gap-y-4 p-4 bg-black text-white overflow-hidden w-full sm:h-auto sm:justify-center sm:gap-x-3 sm:absolute sm:z-10 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:bg-gradient-to-r sm:from-black/20 sm:to-black/80 sm:p-8 2xl:p-16">
        <div className="flex flex-wrap gap-2 sm:gap-x-4">
          Genres go here brrr
        </div>
        <div className="flex gap-x-4 items-center sm:w-4/6 md:w-3/5">
          <h2 className="overflow-visible text-3xl sm:text-xl md:text-2xl lg:text-3xl"> Title Goes Here Brrrr </h2>
          <p className="max-w-max p-2 bg-yellow-500 font-bold text-gray-500 shadow sm:p-1 sm:text-sm xl:text-base">
            {movie?.vote_average?.toFixed(1)}
          </p>
        </div>
        <p className="xs:text-xs sm:text-sm sm:w-4/6 md:w-3/5 xl:text-base xl:w-1/2 2xl:text-lg 2xl:w-2/5">
          {movie?.overview}
        </p>
        <button className="bg-white text-black border-none rounded-2xl w-32 py-1 cursor-pointer hover:opacity-80 sm:py-1 sm:w-28 2xl:text-base">
          See Details
        </button>
      </div>
    </div>
  )
}

export default Preview;