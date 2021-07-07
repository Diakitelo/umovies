import React, {useState, useMemo, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from '@iconify/react';
import chevronLeft from '@iconify-icons/akar-icons/chevron-left';
import chevronRight from '@iconify-icons/akar-icons/chevron-right';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Actor from './Actor';
import MoviesByActor from './MoviesByActor/MoviesByActor';
// import Profile from '../../assets/actor.png';
import Playbtn from '../../assets/playbtn.svg';
import quote from '../../assets/quote.svg';
import withReducer from '../../store/withReducer';
import * as Actions from './store/actions';
import reducer from './store/reducers';

function Actors() {
  const sliderRef = useRef();
  const dispatch = useDispatch();
  const actors = useSelector(({Actors}) => Actors.actors.actors);
  const actorDetails = useSelector(({Actors}) => Actors.actors.actorDetails);
  const actorMovies = useSelector(({Actors}) => Actors.actors.moviesByActor);
  const [selectedActor, setSelectedActor] = useState(actors?.results?.[1]);
  const imgUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    dispatch(Actions.getActors());
  }, [dispatch]);

  useMemo(() => {
    if (selectedActor && selectedActor?.id !== null) {
      dispatch(Actions.getMoviesByActor(selectedActor?.id));
      dispatch(Actions.getActorDetails(selectedActor?.id));
    } else {
      setSelectedActor(actors?.results?.[1]);
    }
  }, [dispatch, selectedActor, actors?.results]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const handleSelectedActor = actors => {
    setSelectedActor(actors);
  };

  return (
    <div className="h-5/6 bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="uppercase text-lg text-white px-4 pt-16">top actors</h4>
        <div className="flex justify-between text-3xl uppercase text-white px-4 ">
          <p>movies by actors</p>
          <div>
            {/* <input className="focus:ring-2 focus:ring-blue-900 ..."></input> */}
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
        <div className="py-4">
          <Slider {...settings} ref={sliderRef}>
            {actors?.results?.map(actor => (
              <Actor
                actor={actor}
                key={actor.id}
                onClick={() => handleSelectedActor(actor)}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto items-end justify-between text-3xl uppercase text-white px-4 py-4">
          <div className="w-1/3 flex relative">
            <img
              className="w-72"
              src={imgUrl + selectedActor?.profile_path}
              alt={selectedActor?.name}
            />
            <div className="absolute bottom-20 left-0">
              <h3 className="text-2xl">{selectedActor?.name}</h3>
              <div className="relative">
                <p className="text-lg normal-case pt-5 w-9/12 text-gray-500 pl-5">
                  {actorDetails?.biography?.slice(0, 150)} ...
                </p>
                <span className="absolute top-5">
                  <img src={quote} alt="quote" />
                </span>
              </div>
              <div className="relative">
                <p className="text-lg capitalize pt-5 w-11/12 text-with pl-5">
                  View Robert Biography
                </p>
                <span className="absolute top-7">
                  <img src={Playbtn} alt="playbtn" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-2/3 capitalize ">
            <MoviesByActor
              movies={actorMovies?.results}
              selectedActor={selectedActor?.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withReducer('Actors', reducer)(Actors);
