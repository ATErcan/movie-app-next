"use client";

import { baseUrl } from "@/app/assets/tmdb";
import { getData } from "@/app/assets/tmdb";
import { useEffect, useRef, useState } from "react";
import GroupPageCard from "./GroupPageCard";
import NavigationBtns from "../UI/NavigationBtns";
import GroupPageSkeleton from "../UI/GroupPageSkeleton";

const GroupPages = ({ group, title }: { group: string; title: string }) => {
  const [moviesArr, setMoviesArr] = useState<MovieResponse | null>(null);
  const [page, setPage] = useState(1);
  const [searchMovie, setSearchMovie] = useState<string | undefined>("");
  const [search, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    getMovies();
  }, [page, search, searchMovie]);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.value = "";
    }
  }, [moviesArr]);

  const getMovies = () => {
    setLoading(true);
    if (!search) {
      getData(
        `${baseUrl}movie/${group}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=${page}`
      )
        .then((res: MovieResponse) => setMoviesArr(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      getData(
        `${baseUrl}search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&query=${searchMovie}&page=${page}&include_adult=false`
      )
        .then((res: MovieResponse) => setMoviesArr(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  };

  const movies = moviesArr?.results?.map((movie) => (
    <GroupPageCard key={movie.id} movie={movie} />
  ));

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchMovie(searchRef.current?.value);
    setSearch(true);
    setPage(1);
  };

  const reset = () => {
    setSearch(false);
    setSearchMovie("");
  };

  if (loading) {
    return <GroupPageSkeleton />;
  } else {
    return (
      <div className="bg-black text-white pt-4 px-4 pb-8 min-h-screen">
        <div className="flex flex-col max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center px-4 gap-x-4 md:px-6 mb-4">
            <h2
              className="my-4 cursor-pointer sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl"
              onClick={reset}
            >
              {title} Movies
            </h2>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search Movie..."
                className="bg-gray-700 pl-3 pr-2 py-2 rounded-s-3xl w-36 xs:w-44 sm:w-52 focus:outline-none focus:bg-gradient-to-l focus:from-slate-800 focus:to-slate-500"
                ref={searchRef}
              />
              <button
                className="bg-gray-600 rounded-e-3xl p-2 hover:opacity-90"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          {search && (
            <p className="px-4 mb-2 md:px-6 italic font-light">
              {" "}
              {`Search results for "${searchMovie}":`}{" "}
            </p>
          )}
          <div className="flex flex-wrap gap-6 justify-around mx-auto">
            {movies}
          </div>
        </div>
        {moviesArr?.total_pages && moviesArr.total_pages > 1 && (
          <NavigationBtns page={page} setPage={setPage} group={group} />
        )}
      </div>
    );
  }
};

export default GroupPages;
