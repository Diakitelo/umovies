import React from 'react';

export default function Poster({movie}) {
  const url = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className="flex px-4 justify-between">
      <div className="w-56">
        <div className="h-60 w-full rounded-lg">
          <img
            src={
              movie.poster_path !== null
                ? url + movie.poster_path
                : url + movie.backdrop_path
            }
            alt={movie.original_title}
            className="h-60 w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
