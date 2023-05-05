import CarouselSkeleton from "@/app/components/UI/CarouselSkeleton"
import MovieGroupSkeleton from "@/app/components/UI/MovieGroupSkeleton";

const Loading = () => {
  return (
    <>
      <CarouselSkeleton />
      {Array.from({ length: 3 }).map((item, i) => (
        <MovieGroupSkeleton key={i} />
      ))}
    </>
  )
}

export default Loading;