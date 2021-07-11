import React from 'react';
import {Link} from 'react-router-dom';

import StartIcon from '../../assets/start.svg';
import {fShortenNumber} from '../../utils';

export default function Movies({movie}) {
  const url = 'https://image.tmdb.org/t/p/original/';
  return (
    <Link to={`details/${movie.id}`}>
      <div className="flex flex-col px-4">
        <div className="h-36 w-full rounded-lg transition duration-500 hover:scale-105 transform cursor-pointer">
          <img
            src={url + movie.poster_path}
            alt={movie.original_title}
            className="h-36 w-full object-cover rounded-lg"
          />
        </div>
        <div className="py-2">
          <h3 className="uppercase text-xl text-white">
            {movie.original_title}
          </h3>
        </div>
        <div className="pb-2">
          <p className="text-sm text-white">
            {movie.overview?.slice(0, 150)}...
          </p>
        </div>
        <div className="text-white text-sm flex align-center py-2">
          <img className="w-20 pr-3" src={StartIcon} alt="start-icon" />
          <span>{fShortenNumber(movie.popularity)} Reviews</span>
        </div>
        <div className="py-4">
          <button className="text-white hover:bg-red hover:text-white px-12 border-2 border-red-600 py-3 rounded-md text-base font-medium uppercase">
            download
          </button>
        </div>
      </div>
    </Link>
  );
}
