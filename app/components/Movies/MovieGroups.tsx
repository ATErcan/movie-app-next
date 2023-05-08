'use client';

import { baseUrl, getData } from "@/app/assets/tmdb";
import MovieCard from "./MovieCard";
import { useEffect, useRef, useState } from "react";
import Preview from "./Preview";

const MovieGroups: React.FC<IGroup> = ({ group }) => {
  const [movieArr, setMovieArr] = useState<MovieData[] | []>([]);
  const [moviePreview, setMoviePreview] = useState<MovieData | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const getMovies = async () => {
    const { results }: {results: MovieData[]} = await getData(`${baseUrl}movie/${group}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=1`);
    setMovieArr(results);
  }

  useEffect(() => {
    getMovies();
  },[])
  
  const displayPreview = (id: string) => {
    const movie = movieArr?.filter(movie => movie.id.toString() === id);
    if(moviePreview === null){
      setShowPreview(true);
      setMoviePreview(movie[0]);
    } else if (moviePreview.id === movie[0].id) {
      setShowPreview(false);
      setMoviePreview(null);
    } else {
      setShowPreview(true);
      setMoviePreview(movie[0]);
    }
    if(previewRef.current){
      window.scrollTo({
        top: previewRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }

  const movies = movieArr.map(movie => <MovieCard key={movie.id} movie={movie} displayPreview={displayPreview} />)

  return (
    <>
      <div className="flex gap-x-4 overflow-y-hidden overflow-x-scroll scroll-bar">
        {movies}
      </div>
      <Preview
        movie={moviePreview}
        showPreview={showPreview}
        previewRef={previewRef}
      />
    </>
  );
}

export default MovieGroups;