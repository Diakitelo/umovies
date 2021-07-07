import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PlayIcon from '../../assets/play-button.svg';
import StartIcon from '../../assets/start.svg';
import withReducer from '../../store/withReducer';
import * as Actions from '../posters/store/actions';
import reducer from '../posters/store/reducers';
import {fShortenNumber} from '../../utils';

function Header() {
  const dispatch = useDispatch();
  const hollywoodMovies = useSelector(
    ({tending}) => tending.moviesByCountry.hollywood_movies,
  );

  const url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    dispatch(Actions.getHollywoodMovies());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {hollywoodMovies?.results?.map(movie => (
        <div key={movie.id}>
          <div
            className="h-screen bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${url + movie.poster_path})`,
              objectFit: 'cover',
              boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2)',
            }}
          >
            <div className="flex content-end flex-wrap h-5/6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-2">
                <div className="text-white p-2">
                  <p className="uppercase">{movie.release_date}</p>
                </div>
                <div className="text-white w-3/5 p-2">
                  <h1 className="uppercase text-4xl tracking-widest md:tracking-wide ">
                    {movie.original_title}
                  </h1>
                </div>
                <div className="text-white w-3/5 p-2">
                  <p>{movie.overview?.slice(0, 200)}...</p>
                </div>
                <div className="text-white flex align-center p-2">
                  <img
                    className="h-90 w-90 pr-3"
                    src={StartIcon}
                    alt="start-icon"
                  />
                  <span>{fShortenNumber(movie.popularity)} Reviews</span>
                </div>
                <div className="text-white flex align-center p-2">
                  <img
                    className="h-90 w-90 pr-3"
                    src={PlayIcon}
                    alt="play-icon"
                  />
                  <span>Watch Trailer</span>
                </div>
                <div className="p-2 flex justify-between">
                  <div>
                    <a
                      href="/home"
                      className="text-white bg-red hover:text-white px-10 py-2 rounded-md text-base font-medium uppercase"
                    >
                      book show
                    </a>
                  </div>
                  {/* <div>
                    <span className="bg-red px-5 rounded-md"></span>
                    <span className="bg-red px-5 rounded-md"></span>
                    <span className="bg-red px-5 rounded-md"></span>
                  </div> */}
                </div>
              </div>
            </div>
            {/*  <div className=" bg-red max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-5/6 flex justify-center content-around bg-opacity-50">

        <h1>Avengers - Infinity war</h1>
      </div> */}
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default withReducer('tending', reducer)(Header);
