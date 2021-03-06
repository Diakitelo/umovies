import React, {useEffect, useMemo, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Icon} from '@iconify/react';
import chevronLeft from '@iconify-icons/akar-icons/chevron-left';
import chevronRight from '@iconify-icons/akar-icons/chevron-right';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import withReducer from '../store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Actor from '../components/actors/Actor';
import {fShortenNumber} from '../utils';
import Avatar from '../assets/avatar.jpg';
import Poster from '../components/posters/Poster';

function MovieDetailPage() {
  const dispatch = useDispatch();
  const sliderRef = useRef();
  const moviesDetail = useSelector(
    Details => Details.movieDetail.movieDetail.data,
  );
  const moviesVideo = useSelector(
    Details => Details.movieDetail.movieDetail.video,
  );
  const moviesActors = useSelector(
    Details => Details.movieDetail.movieDetail.actors,
  );
  const sameGenreMovies = useSelector(
    Details => Details.movieDetail.movieDetail.sameGenresMovies,
  );
  let params = useParams();

  const getProducer = moviesActors?.crew?.filter(
    elem => elem.job === 'Producer',
  );

  //const url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    dispatch(Actions.getMovieDetails(params.id));
    dispatch(Actions.getMovieVideo(params.id));
    dispatch(Actions.getActorsOfMovie(params.id));
  }, [dispatch, params.id]);

  useMemo(() => {
    dispatch(Actions.getMoviesByGenre(moviesDetail?.genres?.[0]?.id));
  }, [dispatch, moviesDetail?.genres]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsGenre = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="bg-blue h-full">
      <div className="z-50 absolute">
        <NavBar />
      </div>
      <div className="text-white max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row bg-blue pt-16">
          <div className="w-full md:w-7/12 mx-auto m-5">
            <h1 className="text-4xl md:hidden font-semibold h-16">
              {moviesDetail.title}
            </h1>
            <div className="h-96 rounded-lg">
              <iframe
                src={`https://www.youtube.com/embed/${moviesVideo?.results?.[0]?.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="h-96 w-full rounded-lg"
              />
            </div>
            <h3 className="text-2xl py-5">Actors</h3>
            <div>
              <Slider {...settings}>
                {moviesActors?.cast?.map(actor => (
                  <Actor actor={actor} key={actor.id} />
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-full mx-auto md:w-5/12 md:m-5 h-auto">
            <div className="flex flex-wrap py-6">
              {moviesDetail?.genres?.map(genre => (
                <div
                  key={genre.id}
                  className="bg-red rounded-lg px-1 m-1 text-base"
                >
                  <p>#{genre.name}</p>
                </div>
              ))}
            </div>
            <h1 className="text-4xl hidden md:block font-semibold h-20">
              {moviesDetail.title}
            </h1>
            <div className="flex justify-between py-5">
              <div className="flex space-x-2 items-center">
                <div>
                  <img
                    src={Avatar}
                    alt="quote"
                    className="h-16 w-16 rounded-full"
                  />
                </div>
                <div>
                  <p>{getProducer?.[0].name}</p>
                  <p className="text-gray-600">Producer</p>
                </div>
              </div>
              <div className="flex">
                <div className="">
                  <button className="text-white bg-red hover:text-white border-4 hover:bg-blue border-red-500 px-5 py-2 rounded-md text-base font-medium ">
                    Follow {fShortenNumber(moviesDetail.revenue)}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl mb-3 border-b-4 border-red-500 w-16">
                SYNOPSIS
              </p>
              <p>{moviesDetail.overview}</p>
            </div>
            <div className="flex flex-wrap justify-between pt-9">
              {/* {moviesDetail?.production_companies?.map(production => (
                <div key={production.id}>
                  {production.logo_path !== null && (
                    <img
                      src={url + production.logo_path}
                      alt={production.name}
                      className="h-36 w-full object-cover rounded-lg"
                    />
                  )}
                </div>
              ))}*/}
              <div className="flex justify-between flex-wrap space-x-4 text-gray-500  py-2">
                <div>
                  <p>Popularity</p>
                  <p> {fShortenNumber(moviesDetail.popularity)}</p>
                </div>
                <div>
                  <p>Release Date</p>
                  <p>{moviesDetail.release_date}</p>
                </div>
                <div>
                  <p>Budget</p>
                  <p>{fShortenNumber(moviesDetail.budget)}</p>
                </div>
                <div>
                  <p>Revenue</p>
                  <p>{fShortenNumber(moviesDetail.revenue)}</p>
                </div>
                <div>
                  <p>Vote count</p>
                  <p>{fShortenNumber(moviesDetail.vote_count)}</p>
                </div>
                <div>
                  <p>Vote average</p>
                  <p>{fShortenNumber(moviesDetail.vote_average)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto md:px-12 ">
        <div className="flex justify-between items-center px-3">
          <div>
            <h4 className="text-xl md:text-2xl py-8 text-white">
              Movies in the same genre
            </h4>
          </div>
          <div>
            <button
              className="bg-red text-white cursor-pointer px-2 m-1 hover:bg-white hover:text-red-600"
              onClick={previous}
            >
              <Icon icon={chevronLeft} className="md:w-6 md:h-10 w-4 h-6" />
            </button>
            <button
              className="bg-red text-white cursor-pointer px-2 m-1 hover:bg-white hover:text-red-600"
              onClick={next}
            >
              <Icon icon={chevronRight} className="md:w-6 md:h-10 w-4 h-6" />
            </button>
          </div>
        </div>
        <Slider {...settingsGenre} ref={sliderRef}>
          {sameGenreMovies?.results?.map(movie => (
            <Poster isDetailPage={true} movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>

      <div className="pt-7 max-w-9xl mx-auto bg-blue">
        <Footer />
      </div>
    </div>
  );
}

export default withReducer('Details', reducer)(MovieDetailPage);
