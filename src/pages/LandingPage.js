import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Header from '../components/header/Header';
import RecommendedMovies from '../components/recommended/RecommendedMovies';
import Posters from '../components/posters/Posters';
import Actors from '../components/actors/Actors';
import News from '../components/news/News';
import Footer from '../components/footer/Footer';

export default function LandingPage() {
  return (
    <>
      <div>
        <div className="z-50 absolute">
          <NavBar />
        </div>
        <Header />
        <RecommendedMovies />
        <Posters />
        <Actors />
        <News />
        <Footer />
      </div>
    </>
  );
}
