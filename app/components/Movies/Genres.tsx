const Genres = ({ genres, containerStyle, itemStyle }: { genres: (GenreData | undefined)[] | undefined , containerStyle: string, itemStyle: string }) => {
  const genreList = genres?.map((genre) => (
    <li
      key={genre?.id}
      className={itemStyle}
    >
      {genre?.name}
    </li>
  ));

  return (
    <ul className={`flex flex-wrap ${containerStyle}`}>
      {genreList}
    </ul>
  )
}

export default Genres;