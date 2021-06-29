import React from 'react';

import New from './New';
import Pub from '../../assets/pub.png';

export default function News() {
  return (
    <div className="h-5/6 bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="uppercase text-lg text-white px-4 pt-16">trending</h4>

        <div className="flex justify-between text-3xl uppercase text-white px-4 ">
          <p>Latest news</p>
        </div>
      </div>
      <div className="py-12 px-4">
        <New />
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        <img className="w-full " src={Pub} alt="start-icon" />
      </div>
    </div>
  );
}
