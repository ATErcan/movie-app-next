import { baseImgUrl, baseUrl, getData } from "@/app/assets/tmdb";
import Image from "next/image";

const Video = ({ results, title, error }: { results: MovieVideo[] | [], title: string, error: boolean }) => {
  const officials = results?.filter(
    (video) => video.type === "Trailer" && video.official
  );

  if(error) {
    return (
      <Image
        src={"/images/no-trailer.jpg"}
        alt="can not find video"
        width={600}
        height={400}
        className="w-full h-full"
      /> 
    )
  } else if(officials.length > 0) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${officials[0]?.key}`}
        className="absolute top-0 left-0 w-full h-full"
        title={title}
        allowFullScreen
      ></iframe>
    )
  } else if(results.length > 0) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${results[0]?.key}`}
        className="absolute top-0 left-0 w-full h-full"
        title={title}
        allowFullScreen
      ></iframe>
    )
  } else {
    return (
      <Image
        src={"/images/no-trailer.jpg"}
        alt="can not find video"
        width={600}
        height={400}
        className="w-full h-full"
      /> 
    )
  }
}

const Trailer = async ({ movie }: { movie: MovieDetails }) => {
  let error: boolean = false;
  const { results }: { results: MovieVideo[] | [] } = await getData(
    `${baseUrl}movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
  ).catch(() => (error = true));

  return (
    <div className="flex md:gap-x-1.5">
      <Image
        src={
          movie.poster_path 
            ?`${baseImgUrl}${movie.poster_path}`
            : "/images/no-movie.png"
          }
        alt={movie.title}
        width={400}
        height={600}
        className="hidden md:block md:w-1/3 lg:max-w-[21rem] lg:max-h-[32.5rem]"
      />
      <div className="relative w-full overflow-hidden lg:max-h-[32.5rem] max-w-4xl">
        <Video results={results} title={movie.title} error={error} />
      </div>
    </div>
  );
};

export default Trailer;
