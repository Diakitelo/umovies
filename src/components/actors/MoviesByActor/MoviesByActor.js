import React from 'react';
import Movie from './Movie';

export default function MoviesByActor() {
  return (
    <div className="h-5/6 bg-blue">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between text-3xl text-white py-4">
          <div className="flex items-baseline space-x-4">
            <spam className=" hover:bg-gray-700 active:bg-green-700 text-white py-2  text-lg font-medium">
              best Films
            </spam>

            <spam className="text-gray-300 hover:bg-gray-700 active:bg-green-700 hover:text-white py-2 text-lg font-medium">
              Popular
            </spam>

            <spam className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 text-lg font-medium">
              Lastet
            </spam>
          </div>
          <div>
            <span className="bg-red px-2 m-1 text-white">L</span>
            <span className="bg-white px-2 m-1 text-red-700">R</span>
          </div>
        </div>
      </div>
      <div className=" mx-auto px-4  sm:px-6 lg:px-8">
        <Movie />
      </div>
    </div>
  );
}
