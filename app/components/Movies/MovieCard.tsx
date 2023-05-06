import Card from "./Card";

const MovieCard = ({ movie, displayPreview }: { movie: MovieData, displayPreview: (id: string)=>void }) => {

  return (
    <Card movie={movie} clickEvent={displayPreview} classes="hover:opacity-70 hover:scale-110 linear duration-200" animation={{in: "titleIn", out: "titleOut"}}>
      {(showTitle) => (
        <div className={`flex items-center absolute bottom-4 left-0 right-0 w-full h-auto m-auto text-center justify-center text-white bg-black/50 p-2 overflow-hidden ${showTitle ? "animate-titleIn opacity-100" : "animate-titleOut opacity-0"}`}>
          <h3> {movie.title} </h3>
        </div>
      )}
    </Card>
  )
}

export default MovieCard;