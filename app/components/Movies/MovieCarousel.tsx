"use client";

import { baseImgUrl, baseUrl, getData } from "@/app/assets/tmdb";
import { Paper } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import Genres from "./Genres";
import { useRouter } from "next/navigation";
import { AiFillStar } from "react-icons/ai";

function Item({ movie, genres }: { movie: MovieData; genres: GenreData[] }) {
  const router = useRouter();

  const genreNames = movie.genre_ids.map((id) => {
    const genre = genres.find((genre) => genre.id === id);
    return genre;
  });

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

      <div className="flex flex-col gap-y-2 p-4 bg-black text-white sm:absolute sm:top-1/2 sm:transform sm:-translate-y-1/2  sm:bg-transparent sm:p-8 xl:pl-16">
        <Genres
          genres={genreNames}
          containerStyle="gap-x-3 gap-y-2"
          itemStyle="px-3 py-2 bg-gray-500 bg-opacity-30 rounded-3xl text-xs sm:text-base sm:backdrop-blur-lg xl:text-xl xl:py-3 xl:px-4 2xl:text-2xl"
        />
        <h2 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl">
          {movie.title}
        </h2>
        <div className="flex justify-center items-center relative p-0 w-max">
          <AiFillStar className="text-5xl sm:text-6xl xl:text-7xl text-yellow-500 p-0" />
          <p className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 max-w-max font-bold text-gray-500 text-sm sm:text-base xl:text-xl m-0 p-0">
          {movie.vote_average.toFixed(1)}
          </p>
        </div>

        <button
          className="bg-white text-black border-none rounded-2xl w-32 py-1 cursor-pointer hover:opacity-80 sm:py-1.5 sm:w-36 2xl:text-base"
          onClick={() => router.push(`/movies/details/${movie.id}`)}
        >
          See Details
        </button>
      </div>
    </Paper>
  );
}

const MovieCarousel = () => {
  const [movies, setMovies] = useState<MovieData[] | []>([]);
  const [genres, setGenres] = useState<GenreData[]>([]);

  useEffect(() => {
    getData(
      `${baseUrl}movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&page=1`
    )
      .then((res) => setMovies(res.results))
      .catch((error) => console.log(error));
    getData(
      `${baseUrl}genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
    )
      .then((res) => setGenres(res.genres))
      .catch((error) => console.log(error));
  }, []);

  const items = movies.filter((movie, i) => i < 5);

  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      duration={1000}
      interval={5000}
      indicators={false}
    >
      {items.map((movie) => (
        <Item key={movie.id} movie={movie} genres={genres} />
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
