import { baseUrl, getData } from "@/assets/tmdb";
import MovieCard from "./MovieCard";

{/* @ts-expect-error Server Component */}
const MovieGroups: React.FC<IGroup> = async ({ group }) => {
  const { results }: {results: MovieData[]} = await getData(`${baseUrl}movie/${group}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=1`);

  const movies = results.map(movie => <MovieCard key={movie.id} movie={movie} />)

  console.log('group')

  return (
    <div className="flex gap-x-4 overflow-y-hidden overflow-x-scroll">
      {movies}
    </div>
  )
}

export default MovieGroups;