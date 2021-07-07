import {createAPIEndpoint, ENDPIONTS} from '../../../../api';

export const GET_POPULARMOVIES = 'GET_POPULARMOVIES';

export function getPopularMovies(params) {
  const request = createAPIEndpoint(ENDPIONTS.POPULARMOVIES).fetchAll();

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_POPULARMOVIES,
        payload: response.data,
      }),
    );
}
