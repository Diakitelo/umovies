import React from 'react';
import Header from '../components/header/Header';
import RecommendedMovies from '../components/recommended/RecommendedMovies';

export default function LandingPage() {
  return (
    <>
      <div>
        <Header />
        <RecommendedMovies />
      </div>
    </>
  );
}
