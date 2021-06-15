import React from 'react';
import NavBar from '../navbar/NavBar';

import Background from '../../assets/header.png';
import PlayIcon from '../../assets/play-button.svg';
import StartIcon from '../../assets/start.svg';

export default function Header() {
  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <NavBar />
      <div className="flex content-end flex-wrap h-5/6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" p-2">
          <div className="text-white p-2">
            <p className="uppercase">31 sept 2019</p>
          </div>
          <div className="text-white w-3/5 p-2">
            <h1 className="uppercase text-4xl tracking-widest md:tracking-wide ">
              Avengers - Infinity war
            </h1>
          </div>
          <div className="text-white w-3/5 p-2">
            <p>
              In 2016, Marvel shortened the title to Avengers: Infinity War.
              Filming began in January 2017 at Pinewood Atlanta Studios in
              Fayette County, Georgia, with a large cast consisting mostly of
              actors .
            </p>
          </div>
          <div className="text-white flex align-center p-2">
            <img className="h-90 w-90 pr-3" src={StartIcon} alt="start-icon" />
            <span>12K Reviews</span>
          </div>
          <div className="text-white flex align-center p-2">
            <img className="h-90 w-90 pr-3" src={PlayIcon} alt="play-icon" />
            <span>Watch Trailer</span>
          </div>
          <div className="p-2 flex justify-between">
            <div>
              <a
                href="/home"
                className="text-white bg-red hover:text-white px-10 py-2 rounded-md text-base font-medium uppercase"
              >
                book show
              </a>
            </div>
            <div>
              <span className="bg-red px-5 rounded-md"></span>
              <span className="bg-red px-5 rounded-md"></span>
              <span className="bg-red px-5 rounded-md"></span>
            </div>
          </div>
        </div>
      </div>
      {/*  <div className=" bg-red max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-5/6 flex justify-center content-around bg-opacity-50">

        <h1>Avengers - Infinity war</h1>
      </div> */}
    </div>
  );
}
