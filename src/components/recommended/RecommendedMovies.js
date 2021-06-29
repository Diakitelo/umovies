import React from 'react';

import Movies from './Movies';
import Pub from '../../assets/pub.png';

export default function RecommendedMovies() {
  return (
    <div className="h-5/6 bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="uppercase text-lg text-white px-4 pt-16">top actions</h4>

        <div className="flex justify-between text-3xl uppercase text-white px-4 pb-4">
          <p>Recommended movies</p>
          <div>
            <span className="bg-red px-2 m-1 text-white">L</span>
            <span className="bg-white px-2 m-1 text-red-700">R</span>
          </div>
        </div>
        <div>
          <Movies />
        </div>
        <div className="py-12 px-4">
          <img className="w-full pr-3" src={Pub} alt="start-icon" />
        </div>
      </div>
    </div>
  );
}
