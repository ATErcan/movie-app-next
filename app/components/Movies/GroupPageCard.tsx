import Card from "./Card";

const GroupPageCard = ({ movie }: { movie: MovieData }) => {

  const handleClick = (id: string) => {
    console.log("clicked")
  }

  return (
    <Card movie={movie} clickEvent={handleClick}>
      {() => (
        <div className="hidden md:flex md:flex-col gap-y-2 p-2 bg-black/50 absolute bottom-0">
          <h3 className="md:text-base xl:text-xl"> {movie.title} </h3>
          <p className="text-xs leading-snug overflow-y-auto xl:text-sm 2xl:text-base">
            {movie.overview}
          </p>
        </div>        
      )}
    </Card>
  )
}

export default GroupPageCard;