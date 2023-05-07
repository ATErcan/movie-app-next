'use client';

import { useRouter } from "next/navigation";
import Card from "./Card";

const SimilarMoviesCard =  ({ movie }: { movie: MovieData }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movies/details/${movie.id}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Card clickEvent={handleClick} movie={movie} classes="hover:opacity-70 linear duration-200" >
      {(showTitle) => (
        <div className={`flex items-center absolute bottom-4 left-0 right-0 w-full h-auto m-auto text-center justify-center text-white bg-black/50 p-2 overflow-hidden ${showTitle ? "animate-titleIn opacity-100" : "animate-titleOut opacity-0"}`}>
          <h3> {movie.title} </h3>
        </div>
      )}
    </Card>
  )
}

export default SimilarMoviesCard;