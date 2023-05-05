import Link from "next/link";
import MovieGroups from "./MovieGroups";

const MovieGroupContainer: React.FC<IGroup> = ({ group, title }) => {
  return (
    <section className="bg-black py-4 px-3">
      <div className="flex items-center flex-wrap justify-between mb-4 gap-2 text-white md:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl"> {title} Movies </h2>
        <Link href={`/movies/${group}`} className="text-base lg:text-lg underline"> See All </Link>
      </div>
			<MovieGroups group={group} />
    </section>
  );
};

export default MovieGroupContainer;
