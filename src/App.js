import React from 'react';
import Provider from 'react-redux/es/components/Provider';

import {routes} from './route/Config';
import Router from './route/Router';
import store from './store';

import './index.css';

export const user = {
  authenticated: false,
};

const App = () => {
  return (
    <Provider store={store}>
      <Router routes={routes} />
    </Provider>
  );
};

export default App;
