import { baseImgUrl, baseUrl, getData } from "@/assets/tmdb";
import Image from "next/image"
import { RefObject, useEffect, useState } from "react";

const Preview = ({ movie, showPreview, previewRef }: { movie: MovieData | null, showPreview: boolean, previewRef: RefObject<HTMLDivElement> }) => {
  const [genres, setGenres] = useState<GenreData[]>([]);
  
  useEffect(() => {
    getData(
      `${baseUrl}genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
    ).then(res => setGenres(res.genres)).catch(error => console.log(error));
  },[])

  const genreNames = movie?.genre_ids.map(id => {
    const genre = genres.find(genre => genre.id === id);
    return genre;
  });

  const genreList = genreNames?.map((genre) => (
    <li
      key={genre?.id}
      className="px-3 py-2 bg-gray-500 bg-opacity-30 rounded-3xl text-xs sm:text-base sm:backdrop-blur-lg xl:text-xl xl:py-3 xl:px-4 2xl:text-2xl"
    >
      {genre?.name}
    </li>
  ));

  return (
    <div ref={previewRef} className={`relative mt-2 overflow-y-hidden ${showPreview ? "lg:h-70v 2xl:h-50v" : "h-0"} duration-200`}>
      <Image src={`${baseImgUrl}${movie?.backdrop_path}`} alt={`${movie?.original_title || "movie"}`} width={600} height={400} className="w-full lg:h-70v lg:object-cover 2xl:h-50v" />
      <div className="flex flex-col gap-y-4 p-4 bg-black text-white overflow-hidden w-full sm:bg-transparent sm:h-full sm:justify-center sm:gap-x-3 sm:absolute sm:z-10 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:bg-gradient-to-r sm:from-black/80 sm:to-black/20 sm:p-8 2xl:p-16">
        <ul className="flex flex-wrap gap-2 sm:gap-x-4">
          { genreList }
        </ul>
        <div className="flex gap-x-4 items-center sm:w-4/6 md:w-3/5">
          <h2 className="overflow-visible text-3xl sm:text-xl md:text-2xl lg:text-3xl"> {movie?.title} </h2>
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