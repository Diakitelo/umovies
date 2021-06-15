import React from 'react';

import StartIcon from '../../assets/start.svg';

export default function Movies() {
  return (
    <div className="flex">
      <div className="flex flex-col w-1/3 px-4">
        <div className="bg-red h-36 w-full rounded-lg"></div>
        <div className="py-2">
          <h3 className="uppercase text-xl text-white">aquaman</h3>
        </div>
        <div className="pb-2">
          <p className="text-sm text-white">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was ...
          </p>
        </div>
        <div className="text-white text-sm flex align-center py-2">
          <img className="w-20 pr-3" src={StartIcon} alt="start-icon" />
          <span>12K Reviews</span>
        </div>
        <div className="py-4">
          <a
            href="/home"
            className="text-white hover:bg-red hover:text-white px-12 border-2 border-red-600 py-3 rounded-md text-base font-medium uppercase"
          >
            download
          </a>
        </div>
      </div>
      <div className="flex flex-col w-1/3 px-4">
        <div className="bg-red h-36 w-full rounded-lg"></div>
        <div className="py-2">
          <h3 className="uppercase text-xl text-white">aquaman</h3>
        </div>
        <div className="pb-2">
          <p className="text-sm text-white">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was ...
          </p>
        </div>
        <div className="text-white text-sm flex align-center py-2">
          <img className="w-20 pr-3" src={StartIcon} alt="start-icon" />
          <span>12K Reviews</span>
        </div>
        <div className="py-4">
          <a
            href="/home"
            className="text-white hover:bg-red hover:text-white px-12 border-2 border-red-600 py-3 rounded-md text-base font-medium uppercase"
          >
            download
          </a>
        </div>
      </div>
      <div className="flex flex-col w-1/3 px-4">
        <div className="bg-red h-36 w-full rounded-lg"></div>
        <div className="py-2">
          <h3 className="uppercase text-xl text-white">aquaman</h3>
        </div>
        <div className="pb-2">
          <p className="text-sm text-white">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was ...
          </p>
        </div>
        <div className="text-white text-sm flex align-center py-2">
          <img className="w-20 pr-3" src={StartIcon} alt="start-icon" />
          <span>12K Reviews</span>
        </div>
        <div className="py-4">
          <a
            href="/home"
            className="text-white hover:bg-red hover:text-white px-12 border-2 border-red-600 py-3 rounded-md text-base font-medium uppercase"
          >
            download
          </a>
        </div>
      </div>
    </div>
  );
}
