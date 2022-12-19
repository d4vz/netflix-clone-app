export interface movies {
  id: number;
  title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  number_of_seasons: number;
  genres: {
    id: number;
    name: string;
  }[];
}

export interface list {
  slug: string;
  title: string;
  items: {
    results: movies[];
  };
}

export interface TMDB_data {
  title: string;
  items: {
    results: movies[];
  };
}
