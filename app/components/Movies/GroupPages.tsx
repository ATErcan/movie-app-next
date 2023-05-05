"use client";

import { baseUrl } from "@/assets/tmdb";
import { getData } from "@/assets/tmdb";
import { useEffect, useState } from "react";
import GroupPageCard from "./GroupPageCard";
import NavigationBtns from "../UI/NavigationBtns";

const GroupPages = ({ group, title }: { group: string; title: string }) => {
  const [moviesArr, setMoviesArr] = useState<MovieData[] | null>(null);
  const [page, setPage] = useState(1);
  const [searchMovie, setSearchMovie] = useState<string>("");

  useEffect(() => {
    getData(
      `${baseUrl}movie/${group}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=${page}`
    )
      .then((res) => setMoviesArr(res.results))
      .catch((error) => console.log(error));
  }, [page]);

  const movies = moviesArr?.map((movie) => (
    <GroupPageCard key={movie.id} movie={movie} />
  ));

  return (
    <div className="bg-black text-white pt-4 px-4 pb-8">
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center px-4 md:px-y">
          <h2 className="my-4 sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
            {title} Movies
          </h2>
          <form>
            <input
              type="text"
              name="search"
              placeholder="Search Movie..."
              className="bg-gray-700 pl-3 pr-2 py-2 rounded-s-3xl focus:outline-none focus:bg-gradient-to-l focus:from-slate-800 focus:to-slate-500"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchMovie(e.target.value)
              }
            />
            <button className="bg-gray-600 rounded-e-3xl p-2 hover:opacity-90">
              Search
            </button>
          </form>
        </div>
        <div className="flex flex-wrap gap-6 justify-around mx-auto">
          {movies}
        </div>
      </div>
      <NavigationBtns page={page} setPage={setPage} group={group} />
    </div>
  );
};

export default GroupPages;
