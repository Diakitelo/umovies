import React from 'react';
import {routes} from './route/Config';
import Router from './route/Router';

import './index.css';

export const user = {
  authenticated: false,
};

const App = () => {
  return (
    <div>
      <Router routes={routes} />
    </div>
  );
};

export default App;
