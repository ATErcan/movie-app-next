import Link from "next/link";
import MovieGroups from "./MovieGroups";

const MovieGroupContainer: React.FC<IGroup> = ({ group, title }) => {
  console.log("container")
  return (
    <section className="bg-black py-4 px-3">
      <div className="flex items-center flex-wrap justify-between mb-4 px-4 gap-2 text-white">
        <h2 className="text-xl"> {title} Movies </h2>
        <Link href="#" className="text-base lg:text-xl"> See All </Link>
      </div>
			<MovieGroups group={group} />
    </section>
  );
};

export default MovieGroupContainer;
