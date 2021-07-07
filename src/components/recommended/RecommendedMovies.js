import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from '@iconify/react';
import chevronLeft from '@iconify-icons/akar-icons/chevron-left';
import chevronRight from '@iconify-icons/akar-icons/chevron-right';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import withReducer from '../../store/withReducer';
import * as Actions from './store/actions';
import reducer from './store/reducers';

import Movies from './Movies';
import Pub from '../../assets/pub.png';

function RecommendedMovies(props) {
  const sliderRef = useRef();
  const dispatch = useDispatch();
  const recommendedMovies = useSelector(
    ({bestMovies}) => bestMovies.recommended.data,
  );

  useEffect(() => {
    dispatch(Actions.getPopularMovies());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="uppercase text-lg text-white px-4 pt-16">top actions</h4>
        <div className="flex justify-between text-3xl uppercase text-white px-4 pb-4">
          <p>Recommended movies</p>
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
        <div>
          <Slider {...settings} ref={sliderRef}>
            {recommendedMovies?.results?.map(movie => (
              <Movies movie={movie} key={movie.id} />
            ))}
          </Slider>
        </div>
        <div className="py-12 px-4">
          <img className="w-full pr-3" src={Pub} alt="start-icon" />
        </div>
      </div>
    </div>
  );
}

export default withReducer('bestMovies', reducer)(RecommendedMovies);
