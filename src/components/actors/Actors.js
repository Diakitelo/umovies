import React from 'react';

export default function Actors() {
  return (
    <div className="h-5/6 bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="uppercase text-lg text-white px-4 pt-16">top actors</h4>

        <div className="flex justify-between text-3xl uppercase text-white px-4 py-4">
          <p>movies by actors</p>
          <div>
            <input class="focus:ring-2 focus:ring-blue-900 ..."></input>
            <span className="bg-red px-2 m-1 text-white">L</span>
            <span className="bg-white px-2 m-1 text-red-700">R</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
