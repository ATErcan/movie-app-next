export const baseUrl = `https://api.themoviedb.org/3/movie/`
export const baseImgUrl = "https://image.tmdb.org/t/p/original";

export const getMovieGroups = async (url: string) => {
  const res = await fetch(url);
  return res.json();
}