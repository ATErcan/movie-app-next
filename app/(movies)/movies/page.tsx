import MovieCarousel from "@/app/components/Movies/MovieCarousel";
import MovieGroupContainer from "@/app/components/Movies/MovieGroupContainer";

const Movies = () => {
  const groupData = [
    {
      id: 1,
      group: "popular",
      title: "Popular",
    },
    {
      id: 2,
      group: "upcoming",
      title: "Upcoming",
    },
    {
      id: 3,
      group: "top_rated",
      title: "Top Rated",
    }
  ]

  return (
    <>
      <MovieCarousel />
      {groupData.map(item => <MovieGroupContainer key={item.id} group={item.group} title={item.title} /> )}
    </>
  )
};

export default Movies;