import React from 'react';

export default function New() {
  return (
    <div className="flex space-x-3 ">
      <div className="w-4/12">
        <div className="bg-gray-400 h-60 w-full rounded-lg"></div>
      </div>
      <div className="w-6/12">
        <div className="bg-gray-400 flex justify-between px-8 auto h-60 w-full rounded-lg text-white ">
          <div className="w-8/12 flex flex-col justify-between">
            <span className="uppercase bg-red w-20 h-16 text-xl font-bold rounded-b-lg  text-center">
              23 <br /> juil
            </span>
            <p className="py-4">
              Miss Peregrine's Home for Peculiar Children is a 2016 fantasy film
              directed by Tim Burton and written by Jane Goldman, based on the
              2011 novel of the same name by Ransom Riggs.
            </p>
          </div>
          <div className="flex items-end py-4 ">
            <p className="hover:bg-red cursor-pointer px-2 py-2 rounded-lg ">
              Read More
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/12">
        <div className="bg-gray-400 h-60 w-full rounded-lg"></div>
      </div>
    </div>
  );
}
