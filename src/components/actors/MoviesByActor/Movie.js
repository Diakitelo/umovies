import React from 'react';

export default function Movie({movie}) {
  const imgUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className="flex space-x-2">
      <div className="relative">
        <div className="w-48 rounded-lg">
          <img
            src={imgUrl + movie.poster_path}
            alt={movie.original_title}
            className="h-60 w-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
