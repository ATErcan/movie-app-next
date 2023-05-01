import MovieGroups from "./MovieGroups";

const MovieGroupContainer: React.FC<IGroup> = ({ group, title }) => {
  return (
    <section>
      <div>
        <h2> {title} Movies </h2>
        <a href="#"> See All </a>
      </div>
			<MovieGroups group={group} />
    </section>
  );
};

export default MovieGroupContainer;
