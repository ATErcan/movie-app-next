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