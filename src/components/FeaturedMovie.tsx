import React from 'react';
import { movies } from '../assets/types';

const FeaturedMovie = ({ item }: { item: movies }) => {
  let firstDate = new Date(item.first_air_date);

  return (
    <section
      className="md:h-screen h-5/6"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="feature--vertical w-full h-full">
        <div className="feature--horizontal pb-36 pt-16 w-full h-full flex flex-col justify-center pl-8">
          <div className="font-bold md:text-6xl text-4xl  ">
            {item.original_name}
          </div>
          <div className="font-bold md:text-xl mt-4">
            <div className="inline-block text-green-500 mr-4">
              {item.vote_average} Pontos
            </div>
            <div className="inline-block mr-4">{firstDate.getFullYear()}</div>
            <div className="inline-block ">
              {item.number_of_seasons} temporada
              {item.number_of_seasons > 1 ? 's' : ''}
            </div>
          </div>
          <div className="wrapped--text mt-4 md:text-xl text-gray-400 md:max-w-xl max-w-full mr-8 md:mr-0">
            {item.overview}
          </div>
          <div className="mt-4">
            <a
              className="inline-block md:text-xl text-black bg-gray-100 font-bold py-3 px-6 rounded mr-3 hover:opacity-70 transition-all duration-200 ease "
              href={`/watch/${item.id}`}
            >
              ► Assistir
            </a>
            <a
              className="inline-block md:text-xl bg-zinc-800 text-gray-100 font-bold py-3 px-6 rounded mr-3 hover:opacity-70 transition-all duration-200 ease"
              href={`/list/add/${item.id}`}
            >
              + Minha Lista
            </a>
          </div>
          <div className="mt-4">
            <div className="md:text-xl text-gray-400">
              <span className="font-bold">Gêneros:</span>{' '}
              {item.genres.map((genre) => genre.name).join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
