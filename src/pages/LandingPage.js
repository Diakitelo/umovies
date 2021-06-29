import React from 'react';
import Header from '../components/header/Header';
import RecommendedMovies from '../components/recommended/RecommendedMovies';
import Posters from '../components/posters/Posters';
import Actors from '../components/actors/Actors';
import News from '../components/news/News';

export default function LandingPage() {
  return (
    <>
      <div>
        <Header />
        <RecommendedMovies />
        <Posters />
        <Actors />
        <News />
      </div>
    </>
  );
}
