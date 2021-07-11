import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
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

function MovieDetailPage() {
  const dispatch = useDispatch();
  const moviesDetail = useSelector(
    Details => Details.movieDetail.movieDetail.data,
  );
  const moviesVideo = useSelector(
    Details => Details.movieDetail.movieDetail.video,
  );
  const moviesActors = useSelector(
    Details => Details.movieDetail.movieDetail.actors,
  );
  let params = useParams();

  //const url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    dispatch(Actions.getMovieDetails(params.id));
    dispatch(Actions.getMovieVideo(params.id));
    dispatch(Actions.getActorsOfMovie(params.id));
  }, [dispatch, params.id]);

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

  return (
    <div>
      <div className="z-50 absolute">
        <NavBar />
      </div>
      <div className="bg-blue h-screen w-screen text-white">
        <div className="flex h-screen pt-16">
          <div className="w-1/2 p-8">
            <div className=" h-96 rounded-lg">
              <iframe
                src={`https://www.youtube.com/embed/${moviesVideo?.results?.[0]?.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                className="h-96 w-full"
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
          <div className="w-1/2 p-8">
            <div className="flex space-x-2 pb-9">
              {moviesDetail?.genres?.map(genre => (
                <div key={genre.id} className="bg-red rounded-lg px-2">
                  <p>#{genre.name}</p>
                </div>
              ))}
            </div>
            <h1 className="text-4xl font-semibold h-28">
              {moviesDetail.title}
            </h1>
            <div className="flex justify-between py-2">
              <div className="w-full flex justify-between text-gray-600">
                <span>
                  Popularity: {fShortenNumber(moviesDetail.popularity)}
                </span>
                <span>Release Date: {moviesDetail.release_date}</span>
                <span>Budget: {fShortenNumber(moviesDetail.budget)}</span>
                <span>Revenue: {fShortenNumber(moviesDetail.revenue)}</span>
                <span>
                  Vote count:
                  {fShortenNumber(moviesDetail.vote_count)}
                </span>
                <span>Vote Average: {moviesDetail.vote_average}</span>
              </div>
            </div>
            <div>
              <p className="text-xl mb-3 border-b-4 border-red-500 w-16">
                SYNOPSIS
              </p>
              <p>{moviesDetail.overview}</p>
            </div>
            <div className="flex justify-between pt-9">
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
            </div>
          </div>
        </div>
        <div className="w-full">
          <Footer className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default withReducer('Details', reducer)(MovieDetailPage);
