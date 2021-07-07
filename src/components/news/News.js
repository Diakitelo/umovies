import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import withReducer from '../../store/withReducer';
import * as Actions from '../posters/store/actions';
import reducer from '../posters/store/reducers';
import New from './New';
import Pub from '../../assets/pub.png';

function News() {
  const dispatch = useDispatch();

  const hollywoodMovies = useSelector(
    ({tending}) => tending.moviesByCountry.hollywood_movies,
  );

  useEffect(() => {
    dispatch(Actions.getHollywoodMovies());
  }, [dispatch]);

  const settings = {
    //  infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    centerPadding: '90px',
  };

  return (
    <div className="h-5/6 bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="uppercase text-lg text-white px-4 pt-16">trending</h4>
        <div className="flex justify-between text-3xl uppercase text-white px-4 ">
          <p>Latest news</p>
        </div>
      </div>
      <div className="py-12">
        <Slider {...settings}>
          {hollywoodMovies?.results?.map(movie => (
            <New movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        <img className="w-full" src={Pub} alt="start-icon" />
      </div>
    </div>
  );
}

export default withReducer('tending', reducer)(News);
