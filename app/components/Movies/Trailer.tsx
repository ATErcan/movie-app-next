import { baseImgUrl, baseUrl, getData } from "@/assets/tmdb";
import Image from "next/image";

const Trailer = async ({ movie }: { movie: MovieDetails }) => {
  const { results }: { results: MovieVideo[] | [] } = await getData(`${baseUrl}movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`);

  const officials = results.filter((video) => 
    video.type === "Trailer" &&
    video.official
  )

  return (
    <div className="flex md:gap-x-1.5">
      <Image
        src={`${baseImgUrl}${movie.poster_path}`} 
        alt={movie.title}
        width={400} 
        height={600}
        className="hidden md:block md:w-1/3 lg:max-w-[21rem] lg:max-h-[32.5rem]" 
      />
      <div className="relative w-full overflow-hidden lg:max-h-[32.5rem] max-w-4xl">
        {officials.length > 0 && <iframe src={`https://www.youtube.com/embed/${officials[0]?.key}`} className="absolute top-0 left-0 w-full h-full" title={movie.title} allowFullScreen></iframe>}
      </div>
    </div>
  )
}

export default Trailer;