import GroupPages from "@/app/components/Movies/GroupPages";
import { notFound } from "next/navigation";

type GroupParams = {
  group: string;
};

const MovieGroupPage = ({ params }: { params: GroupParams }) => {
  const paramsToTitle = (word: string) => {
    const splitWord = word.split("_");
    const capitalized = splitWord.map(w => w[0].toUpperCase() + w.slice(1));
    return capitalized.join(" ");
  }

  const title = paramsToTitle(params.group);

  if(params.group === "popular" || params.group === "top_rated" || params.group === "upcoming"){
    return <GroupPages group={params.group} title={title} />
  }
  return notFound();
};

export default MovieGroupPage;
