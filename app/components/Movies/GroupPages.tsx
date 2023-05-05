'use client';

import { baseUrl } from "@/assets/tmdb";
import { getData } from "@/assets/tmdb";
import { useEffect, useState } from "react";
import GroupPageCard from "./GroupPageCard";
import NavigationBtns from "../UI/NavigationBtns";

const GroupPages = ({ group, title }: { group: string, title:string}) => {
  const [moviesArr, setMoviesArr] = useState<MovieData[] | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData(
      `${baseUrl}movie/${group}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=${page}`
    )
      .then((res) => setMoviesArr(res.results))
      .catch((error) => console.log(error));
  }, [page]);

  const movies = moviesArr?.map(movie => <GroupPageCard key={movie.id} movie={movie} />)

  return (
    <div className="bg-black text-white pt-4 px-4 pb-8">
      <h2 className="my-4 indent-4 sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
        {title} Movies
      </h2>
      <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto">
        {movies}
      </div>
      <NavigationBtns page={page} setPage={setPage} group={group} />
    </div>
  );
};

export default GroupPages;
