import React from 'react';
import {NavLink} from 'react-router-dom';

import Poster from './Poster';

export default function Posters() {
  return (
    <div className="h-5/6 bg-blue">
      <div className="bg-gradient-to-b from-black h-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between text-3xl uppercase text-white px-4 py-4">
            <div className="flex items-baseline space-x-4">
              <NavLink
                to="/home"
                className=" hover:bg-gray-700 active:bg-green-700 text-white py-2  text-lg font-medium"
                activeClassName="border-b-4 border-red-500"
              >
                Hollywood
              </NavLink>

              <NavLink
                to="/home/login"
                className="text-gray-300 hover:bg-gray-700 active:bg-green-700 hover:text-white py-2 text-lg font-medium"
              >
                Bollywood
              </NavLink>

              <NavLink
                to="/p"
                className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 text-lg font-medium"
              >
                Babywood
              </NavLink>
            </div>
            <div>
              <span className="bg-red px-2 m-1 text-white">L</span>
              <span className="bg-white px-2 m-1 text-red-700">R</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Poster />
      </div>
    </div>
  );
}
