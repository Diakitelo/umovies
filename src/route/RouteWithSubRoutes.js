import React, {Suspense} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {user} from '../App';

const RouteWithSubRoutes = route => {
  /** Authenticated flag */
  const authenticated = user.authenticated;

  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={props =>
          route.redirect ? (
            <Redirect to={route.redirect} />
          ) : route.private ? (
            authenticated ? (
              route.component && (
                <route.component {...props} routes={route.routes} />
              )
            ) : (
              <Redirect to="/home" />
            )
          ) : (
            route.component && (
              <route.component {...props} routes={route.routes} />
            )
          )
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
