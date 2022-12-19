import TMDB from './api/TMDB';
import { list, movies } from './assets/types';
import React from 'react';
import MovieRow from './components/MovieRow';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';

const App = () => {
  const [movieList, setMovieList] = React.useState<list[]>([]);
  const [featuredData, setFeaturedData] = React.useState<movies>();
  const [blackHeader, setBlackHeader] = React.useState(false);

  window.onscroll = () => {
    if (window.scrollY > 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  };

  React.useEffect(() => {
    //Pegando toda a lista
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      setMovieList(list);
      //Pegando o Featured
      let originals = list.filter((i) => i.slug === 'originals');
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen);
      let chosenInfo = await TMDB.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <>
      <Header isShadow={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <div className="-mt-32">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </div>

      {movieList.length <= 0 && (
        <div className="loading fixed left-0 top-0 right-0 bottom-0 z-40 bg-primary flex justify-center items-center">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="Carregando"
          />
        </div>
      )}
    </>
  );
};

export default App;
