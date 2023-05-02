import MovieCarousel from "@/app/components/Movies/MovieCarousel";
import MovieGroupContainer from "@/app/components/Movies/MovieGroupContainer";

const Movies = () => {
  return (
    <>
      <MovieCarousel />
      <MovieGroupContainer group="popular" title="Popular" />
    </>
  )
};

export default Movies;