import React from 'react';

export default function Actor({actor, onClick}) {
  const imgUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className="flex px-4 space-x-4 cursor-pointer" onClick={onClick}>
      <div className=" w-48  relative">
        <div className="h-60 w-full rounded-lg transition duration-500 hover:scale-105 transform cursor-pointer">
          <img
            src={imgUrl + actor.profile_path}
            alt={actor.name}
            className="h-60 w-full object-cover rounded-lg"
          />
          <div className="bg-gray-800 h-12 flex justify-center items-center w-full absolute bottom-0 text-white rounded-md">
            <h4>{actor.name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
