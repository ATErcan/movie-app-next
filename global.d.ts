interface Content {
  id: number;
  url: string;
  alt: string;
  desc: string;
}

type Drawer = {
  id: number;
  name: string;
  path: string;
  icon: IconType;
}

type UserInfo = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
};

interface IGroup {
	group: string;
	title?: string;
}

type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type MovieResponse = {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
}

type GenreData = {
  id: number;
  name: string;
}

type CompanyData = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

type Collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection | null;
  budget: number;
  genres: GenreData[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: CompanyData[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type MovieVideo = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

type MovieCast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}