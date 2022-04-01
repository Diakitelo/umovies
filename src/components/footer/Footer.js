import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/UMovies.svg';

export default function Footer() {
  return (
    <footer className="h-56 py-9 bg-blue">
      <div className="max-w-7xl flex mx-auto justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-4/12">
          <div>
            <img className="h-90 w-90 pb-3" src={logo} alt="logo" />
          </div>
          <div>
            <a
              href="https://www.uplabs.com/posts/umovies-web-concept"
              target="_blank"
              rel="noreferrer"
              className="text-xm normal-case w-11/12 text-gray-500"
            >
              Designed By Jayprakash Kachare
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/diakitemohamed"
              target="_blank"
              rel="noreferrer"
              className="text-xm normal-case w-11/12 text-gray-500"
            >
              Developed By Diakite Mohamed
            </a>
          </div>
          <div></div>
        </div>
        <div className="w-4/12 flex text-gray-500 flex-col">
          <h4 className="uppercase text-lg md:text-xl text-white pb-3">
            quick links
          </h4>
          <Link to="#">Movies</Link>
          <Link to="#">Actors</Link>
          <Link to="#">News</Link>
          <Link to="#">About</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
        <div className="w-4/12 md:flex text-gray-500 flex-col hidden ">
          <h4 className="uppercase text-xl text-white pb-3">Newsletter</h4>
        </div>
      </div>
    </footer>
  );
}
