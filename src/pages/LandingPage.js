// import React, {lazy, Suspense, useRef} from 'react';

// import useIntersectionObserver from '../utils/useIntersectionObserver';

import NavBar from '../components/navbar/NavBar';

// const Header = lazy(() =>
//   import(/* webpackChunkName: "Header" */ '../components/header/Header'),
// );
// const RecommendedMovies = lazy(() =>
//   import(
//     /* webpackChunkName: "RecommendedMovies" */ '../components/recommended/RecommendedMovies'
//   ),
// );

// const Posters = lazy(() =>
//   import(/* webpackChunkName: "Posters" */ '../components/posters/Posters'),
// );
// const Actors = lazy(() =>
//   import(/* webpackChunkName: "Actors" */ '../components/actors/Actors'),
// );
// const News = lazy(() =>
//   import(/* webpackChunkName: "News" */ '../components/news/News'),
// );
// const Footer = lazy(() =>
//   import(/* webpackChunkName: "Footer" */ '../components/footer/Footer'),
// );
import Header from '../components/header/Header';
import RecommendedMovies from '../components/recommended/RecommendedMovies';
import Posters from '../components/posters/Posters';
import Actors from '../components/actors/Actors';
import News from '../components/news/News';
import Footer from '../components/footer/Footer';

export default function LandingPage() {
  // const HeaderSection = useRef(null);
  // const RecommendedMoviesSection = useRef(null);
  // const PostersSection = useRef(null);
  // const ActorsSection = useRef(null);
  // const NewsSection = useRef(null);
  // const FooterSection = useRef(null);
  // const isHeaderSectionVisible = useIntersectionObserver(HeaderSection);
  // const isRecommendedMoviesSectionVisible = useIntersectionObserver(
  //   RecommendedMoviesSection,
  // );
  // const isPostersSectionVisible = useIntersectionObserver(PostersSection);
  // const isActorsSectionVisible = useIntersectionObserver(ActorsSection);
  // const isNewsSectionVisible = useIntersectionObserver(NewsSection);
  // const isFooterSectionVisible = useIntersectionObserver(FooterSection);

  return (
    <>
      <div>
        <div className="z-50 absolute">
          <NavBar />
        </div>
        {/* <section ref={HeaderSection}> */}
        {/* {isHeaderSectionVisible && (
            <Suspense> */}
        <Header />
        {/* </Suspense>
          )} */}
        {/* </section> */}
        {/* <section ref={RecommendedMoviesSection}>
          {isRecommendedMoviesSectionVisible && (
            <Suspense> */}
        <RecommendedMovies />
        {/* </Suspense>
          )}
        </section> */}
        {/* <section ref={PostersSection}>
          {isPostersSectionVisible && (
            <Suspense> */}
        <Posters />
        {/* </Suspense>
          )}
        </section> */}
        {/* <section ref={ActorsSection}>
          {isActorsSectionVisible && (
            <Suspense> */}
        <Actors />
        {/* </Suspense>
          )}
        </section> */}
        {/* <section ref={NewsSection}>
          {isNewsSectionVisible && (
            <Suspense> */}
        <News />
        {/* </Suspense>
          )}
        </section> */}
        {/* <section ref={FooterSection}>
          {isFooterSectionVisible && (
            <Suspense> */}
        <Footer />
        {/* </Suspense>
          )}
        </section> */}
      </div>
    </>
  );
}
