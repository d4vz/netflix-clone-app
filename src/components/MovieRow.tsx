import React from 'react';
import { TMDB_data } from '../assets/types';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

const MovieRow = ({ title, items }: TMDB_data) => {
  const [scrollX, setScrollX] = React.useState(0);

  const handleLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 160;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="mb-6">
      <h2 className="ml-8 font-bold text-xl">{title}</h2>

      <ChevronRightIcon
        onClick={handleRight}
        className="h-56 text-gray-400  md:hover:scale-110 transition-all duration-200 cursor-pointer  md:hover:text-gray-100 absolute w-10 right-0  z-40 flex items-center justify-center overflow-hidden  md:opacity-0 hover:opacity-100"
      />

      <ChevronLeftIcon
        onClick={handleLeft}
        className="h-56 w-10 text-gray-400 md:hover:scale-110 transition-all duration-200 cursor-pointer  md:hover:text-gray-100 absolute left-0 z-40 md:opacity-0 hover:opacity-100"
      />

      <div className="pl-8 overflow-x-hidden">
        <div
          className="transition-all duration-500 ease-in flex"
          style={{ width: items.results.length * 160, marginLeft: scrollX }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className=" cursor-pointer w-40">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title}
                  className="scale-90 rounded hover:scale-100 transition-all duration-200 ease h-full"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
