const API_KEY = '0c5fa5814a563d56cd6e066a5413c707';
const API_BASE_URL = 'https://api.themoviedb.org/3';

const FecthData = async (url: string) => {
  const response = await fetch(`${API_BASE_URL}${url}`);
  const json = await response.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await FecthData(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await FecthData(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'topRated',
        title: 'Em alta',
        items: await FecthData(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await FecthData(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await FecthData(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await FecthData(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await FecthData(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await FecthData(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
        ),
      },
    ];
  },
  getMovieInfo: async (movieId: number, type: string) => {
    let info = null
    if (movieId) {
      switch (type) {
        case 'movie':
          info = await FecthData(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`,
          );
          break;
        case 'tv':
          info = await FecthData(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`,
          );
          break;

        default:
          info = null
      }
      return info;
    }
  },
};
