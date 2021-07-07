import React, {useEffect, useRef, useReducer} from 'react';
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
import Poster from './Poster';

const initialState = {industry: 'hollywood'};

function stepperReducer(state, action) {
  switch (action.type) {
    case 'hollywood':
      return {industry: 'hollywood'};
    case 'bollywood':
      return {industry: 'bollywood'};
    default:
      return state;
  }
}

function Posters(props) {
  const [state, stepperDispatch] = useReducer(stepperReducer, initialState);
  const sliderRef = useRef();
  const dispatch = useDispatch();
  const bollywoodMovies = useSelector(
    ({moviesByCountry}) => moviesByCountry.moviesByCountry.bollywood,
  );
  const hollywoodMovies = useSelector(
    ({moviesByCountry}) => moviesByCountry.moviesByCountry.hollywood_movies,
  );

  useEffect(() => {
    dispatch(Actions.getBollywoodMovies());
    dispatch(Actions.getHollywoodMovies());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
      <div className="bg-gradient-to-b from-black h-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center content-center  text-3xl uppercase text-white px-4 py-4">
            <div className="flex items-baseline space-x-4">
              <span
                onClick={() => stepperDispatch({type: 'hollywood'})}
                className={
                  state.industry === 'hollywood'
                    ? 'hover:bg-gray-700 cursor-pointer active:bg-green-700 text-white py-2  text-lg font-medium border-b-4 border-red-500'
                    : 'hover:bg-gray-700 cursor-pointer active:bg-green-700 text-white py-2  text-lg font-medium'
                }
                // activeClassName="border-b-4 border-red-500"
              >
                Hollywood
              </span>

              <span
                onClick={() => stepperDispatch({type: 'bollywood'})}
                className={
                  state.industry === 'bollywood'
                    ? 'hover:bg-gray-700 cursor-pointer active:bg-green-700 text-white py-2  text-lg font-medium border-b-4 border-red-500'
                    : 'hover:bg-gray-700 cursor-pointer active:bg-green-700 text-white py-2  text-lg font-medium'
                }
              >
                Bollywood
              </span>

              {/* <span
                onClick={() => stepperDispatch({type: 'french'})}
                className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white py-2 text-lg font-medium"
              >
                French
              </span> */}
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
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {state.industry === 'bollywood' && (
          <Slider {...settings} ref={sliderRef}>
            {bollywoodMovies?.results?.map(movie => (
              <Poster movie={movie} key={movie.id} />
            ))}
          </Slider>
        )}
        {state.industry === 'hollywood' && (
          <Slider {...settings} ref={sliderRef}>
            {hollywoodMovies?.results?.map(movie => (
              <Poster movie={movie} key={movie.id} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default withReducer('moviesByCountry', reducer)(Posters);
