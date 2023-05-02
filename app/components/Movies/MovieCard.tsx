import { baseImgUrl } from "@/assets/tmdb";
import Image from "next/image"

const MovieCard = ({ movie }: { movie: MovieData }) => {
  console.log('card')
  return (
    <div className="flex flex-col grow-0 shrink-0 basis-auto relative w-48 h-auto cursor-pointer hover:opacity-70 hover:scale-110 md:w-60 xl:w-64">
      <Image src={`${baseImgUrl}${movie.poster_path}`} alt={movie.original_title} width={200} height={300} className="w-full" />
      <div className="flex items-center absolute bottom-4 left-0 right-0 w-full h-auto m-auto text-center justify-center text-white bg-black/50 p-2 overflow-hidden">
        <h3> {movie.title} </h3>
      </div>
    </div>
  )
}

export default MovieCard;