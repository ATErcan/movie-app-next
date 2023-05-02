import { baseUrl, getData } from "@/assets/tmdb";

{/* @ts-expect-error Server Component */}
const MovieGroups: React.FC<IGroup> = async ({ group }) => {
  const { results }: {results: MovieData[]} = await getData(`${baseUrl}movie/${group}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=1`);

  return (
    <div>
      <div> Single Movie Cards </div>
    </div>
  )
}

export default MovieGroups;