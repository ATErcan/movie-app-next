'use client';

import { baseUrl, getData } from "@/assets/tmdb";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import Preview from "./Preview";

const MovieGroups: React.FC<IGroup> = ({ group }) => {
  const [movieArr, setMovieArr] = useState<MovieData[] | []>([]);
  const [moviePreview, setMoviePreview] = useState<MovieData | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const getMovies = async () => {
    const { results }: {results: MovieData[]} = await getData(`${baseUrl}movie/${group}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=1`);
    setMovieArr(results);
  }

  useEffect(() => {
    getMovies();
  },[])
  
  const displayPreview = (id: string) => {
    const movie = movieArr?.filter(movie => movie.id.toString() === id);
    setMoviePreview(movie[0]);
    setShowPreview(prevShow => !prevShow);
  }
  const movies = movieArr.map(movie => <MovieCard key={movie.id} movie={movie} displayPreview={displayPreview} />)


  console.log('group')

  return (
    <>
      <div className="flex gap-x-4 overflow-y-hidden overflow-x-scroll" onClick={(e: React.MouseEvent<HTMLElement>) => console.log(e.target)}>
        {movies}
      </div>
      {showPreview && <Preview movie={moviePreview} />}
    </>
  )
}

export default MovieGroups;