import React from 'react';

export default function New({movie}) {
  const url = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className="flex  justify-between w-full">
      <div className="w-full">
        <div
          className="w-11/12 flex justify-between px-8 auto h-60 rounded-lg text-white "
          style={{
            backgroundImage: `url(${url + movie.poster_path})`,
            objectFit: 'cover',
          }}
        >
          <div className="w-8/12 flex flex-col justify-between">
            <span className="uppercase bg-red w-36 h-8 text-xl font-bold rounded-b-lg  text-center">
              {/* 23 <br /> juil */}
              {movie.release_date}
            </span>
            <p className="py-4">{movie.overview?.slice(0, 150)}...</p>
          </div>
          <div className="flex items-end py-4 ">
            <p className="hover:bg-red cursor-pointer px-2 py-2 rounded-lg ">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
