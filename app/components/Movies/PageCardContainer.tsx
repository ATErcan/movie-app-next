import { baseUrl, getData } from "@/app/assets/tmdb";
import GroupPageCard from "./GroupPageCard";


const PageCardContainer = async ({ page, group }: { page: number, group: string }) => {
  const { results }: { results: MovieData[] } = await getData(
    `${baseUrl}movie/${group}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=${page}`
  )

  const movies = results.map(movie => <GroupPageCard key={movie.id} movie={movie} /> )

  return (
    <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto">
      {movies}
    </div>
  )
}

export default PageCardContainer;