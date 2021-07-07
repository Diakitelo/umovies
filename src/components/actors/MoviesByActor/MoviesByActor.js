import React, {useRef} from 'react';
import {Icon} from '@iconify/react';
import chevronLeft from '@iconify-icons/akar-icons/chevron-left';
import chevronRight from '@iconify-icons/akar-icons/chevron-right';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Movie from './Movie';

export default function MoviesByActor({movies, selectedActor}) {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="h-5/6 bg-blue">
      <div>
        <div className="flex justify-between text-3xl text-white py-4">
          <div className="flex items-baseline space-x-4">
            <span className="text-white py-2 text-lg font-medium">
              best {selectedActor} movies
            </span>
          </div>
          <div>
            <button
              className="bg-red text-white cursor-pointer px-2 m-1 hover:bg-white hover:text-red-600"
              onClick={previous}
            >
              <Icon icon={chevronLeft} width={20} height={40} />
            </button>
            <button
              className="bg-red text-white cursor-pointer px-2 m-1 hover:bg-white hover:text-red-600"
              onClick={next}
            >
              <Icon icon={chevronRight} width={20} height={40} />
            </button>
          </div>
        </div>
      </div>
      <div className=" mx-auto">
        <Slider {...settings} ref={sliderRef}>
          {movies?.map(movie => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
