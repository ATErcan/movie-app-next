"use client";

import { baseImgUrl } from "@/assets/tmdb";
import Image from "next/image";
import { useState } from "react";

const Card = ({
  children,
  movie,
  clickEvent,
  classes,
}: {
  children: (showTitle: boolean) => React.ReactElement;
  movie: MovieData;
  clickEvent: (id: string) => void;
  classes?: string;
}) => {
  const [showTitle, setShowTitle] = useState(false);
  const [imgSrc, setImgSrc] = useState(`${baseImgUrl}${movie?.poster_path}`);

  const handleClick = () => {
    clickEvent(movie.id.toString());
  };

  const handleError = () => {
    setImgSrc("/images/no-movie.png")
  }

  return (
    <div
      className={`flex flex-col grow-0 shrink-0 basis-auto overflow-y-hidden relative w-48 h-auto cursor-pointer ${classes} md:w-60 xl:w-64`}
      onMouseOver={() => setShowTitle(true)}
      onMouseOut={() => setShowTitle(false)}
      onClick={handleClick}
    >
      <Image
        src={imgSrc}
        alt={movie?.original_title}
        width={200}
        height={300}
        className="w-full object-cover"
        onError={handleError}
      />
      {children(showTitle)}
    </div>
  );
};

export default Card;
