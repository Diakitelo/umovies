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
    path: '/',
    component: lazy(() => import('../pages/LandingPage')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
    routes: [
      {
        path: '/home/login',
        component: lazy(() => import('../pages/LoginPage')),
        exact: false,
        private: false,
        fallback: <div> Loading... </div>,
      },
    ],
  },
  {
    path: '/protected',
    component: lazy(() => import('../components/navbar/NavBar')),
    exact: false,
    private: true,
    fallback: <div> Loading... </div>,
  },
];
