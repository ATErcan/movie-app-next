"use client";

import { baseImgUrl, baseUrl, getMovieGroups } from "@/assets/tmdb";
import { Paper } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

function Item({ movie }: { movie: MovieData }) {
  const genresArray = [
    "Action",
    "Fantasy",
    "Adventure",
  ]

  const genres = genresArray.map((genre, i) => (
    <li key={i} className="px-3 py-2 bg-gray-500 bg-opacity-30 rounded-3xl text-xs sm:text-base sm:backdrop-blur-lg xl:text-xl xl:py-3 xl:px-4 2xl:text-2xl">
      {genre}
    </li>
  ));

  return (
    <Paper className="relative sm:min-h-screen">
      <div className="relative h-48 xxs:h-64 xs:h-96 sm:static sm:h-auto">
        <Image
          src={`${baseImgUrl}${movie.backdrop_path}`}
          alt={movie.original_title}
          fill
          className="sm:absolute sm:left-0 sm:right-0 sm:top-0 sm:bottom-0 object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-4 p-4 bg-black text-white sm:absolute sm:top-1/2 sm:transform sm:-translate-y-1/2  sm:bg-transparent sm:p-8 xl:pl-16">
        <div>
          <ul className="flex flex-wrap gap-x-3 gap-y-2">{genres}</ul>
        </div>
        <h2 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl">
          {movie.title}
        </h2>
        <p className="max-w-max p-2 bg-yellow-500 font-bold text-gray-500 shadow sm:p-2.5 sm:text-xl xl:text-2xl 2xl:text-3xl">
          {movie.vote_average.toFixed(1)}
        </p>
        <button className="bg-white text-black border-none rounded-2xl w-32 py-1 cursor-pointer hover:opacity-80 sm:py-1.5 sm:w-36 2xl:text-base">
          See Details
        </button>
      </div>
    </Paper>
  );
}

const MovieCarousel = async () => {
  const { results }: {results: MovieData[]} = await getMovieGroups(`${baseUrl}popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=1`);

  const items = results.filter((movie, i) => i < 5);

  console.log("rendered")

  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      duration={1000}
      interval={5000}
      indicators={false}
    >
      {items.map((movie) => (
        <Item key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
