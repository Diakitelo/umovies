import React from 'react';

import Actor from './Actor';
import MoviesByActor from './MoviesByActor/MoviesByActor';
import Profile from '../../assets/actor.png';
import Playbtn from '../../assets/playbtn.svg';
import quote from '../../assets/quote.svg';

export default function Actors() {
  return (
    <div className="h-5/6 bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="uppercase text-lg text-white px-4 pt-16">top actors</h4>
        <div className="flex justify-between text-3xl uppercase text-white px-4 ">
          <p>movies by actors</p>
          <div>
            <input class="focus:ring-2 focus:ring-blue-900 ..."></input>
            <span className="bg-red px-2 m-1 text-white">L</span>
            <span className="bg-white px-2 m-1 text-red-700">R</span>
          </div>
        </div>
        <div className="py-4">
          <Actor />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto items-end justify-between text-3xl uppercase text-white px-4 py-4">
          <div className="w-1/3 flex relative">
            <img className="w-72" src={Profile} alt="start-icon" />
            <div className="absolute bottom-20 left-0">
              <h2>
                Robert <br /> Downey jr
              </h2>
              <div className="relative">
                <p className="text-lg normal-case pt-5 w-11/12 text-gray-500 pl-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  ...
                </p>
                <span className="absolute top-5">
                  <img src={quote} alt="quote" />
                </span>
              </div>
              <div className="relative">
                <p className="text-lg capitalize pt-5 w-11/12 text-with pl-5">
                  View Robert Biography
                </p>
                <span className="absolute top-7">
                  <img src={Playbtn} alt="playbtn" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-2/3 capitalize ">
            <MoviesByActor />
          </div>
        </div>
      </div>
    </div>
  );
}
