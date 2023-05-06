"use client";

import { baseImgUrl } from "@/assets/tmdb";
import Image from "next/image";
import { useState } from "react";

const Card = ({
  children,
  movie,
  clickEvent,
  classes,
  animation,
}: {
  children: (showTitle: boolean) => React.ReactElement;
  movie: MovieData;
  clickEvent: (id: string) => void;
  classes?: string;
  animation?: { in: string; out: string };
}) => {
  const [showTitle, setShowTitle] = useState(false);

  const handleClick = () => {
    clickEvent(movie.id.toString());
  };

  return (
    <div
      className={`flex flex-col grow-0 shrink-0 basis-auto overflow-y-hidden relative w-48 h-auto cursor-pointer ${classes} md:w-60 xl:w-64`}
      onMouseOver={() => setShowTitle(true)}
      onMouseOut={() => setShowTitle(false)}
      onClick={handleClick}
    >
      <Image
        src={`${baseImgUrl}${movie?.poster_path}`}
        alt={movie?.original_title}
        width={200}
        height={300}
        className="w-full"
      />
      {children(showTitle)}
    </div>
  );
};

export default Card;
