import React, {lazy} from 'react';

export const routes = [
  /* {
    path: '/',
    exact: true,
    redirect: '/',
    fallback: <div> Loading... </div>,
  },*/
  {
    path: '/login',
    component: lazy(() => import('../pages/LoginPage')),
    exact: false,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/details/:id',
    component: lazy(() => import('../pages/MovieDetailPage')),
    exact: false,
    fallback: <div></div>,
  },
  {
    path: '/',
    component: lazy(() => import('../pages/LandingPage')),
    exact: false,
    private: false,
    fallback: (
      <div className="flex justify-center items-center h-screen w-full bg-blue">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-red-500"></div>
      </div>
    ),
    /* routes: [
      {
        path: '/',
        component: lazy(() => import('../pages/MovieDetailPage')),
        exact: false,
        private: false,
        fallback: <div> Loading... </div>,
      },
    ],*/
  },
  {
    path: '/protected',
    component: lazy(() => import('../components/navbar/NavBar')),
    exact: false,
    private: true,
    fallback: <div> Loading... </div>,
  },
];
