import Card from "./Card";

const GroupPageCard = ({ movie }: { movie: MovieData }) => {

  const handleClick = (id: string) => {
    console.log("clicked")
  }

  return (
    <Card movie={movie} clickEvent={handleClick}>
      <div className="flex flex-col gap-y-4 p-4 bg-black/50 absolute bottom-0 ">
        <h3 className="sm:text-xl lg:text-2xl"> {movie.title} </h3>
        <p className="text-xs overflow-y-auto sm:text-sm 2xl:text-base">
          {movie.overview}
        </p>
      </div>
    </Card>
  )
}

export default GroupPageCard;