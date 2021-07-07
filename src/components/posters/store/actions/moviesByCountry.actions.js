import {createAPIEndpoint, ENDPIONTS} from '../../../../api';

export const GET_BOLLYWOOD_MOVIES = 'GET_BOLLYWOOD_MOVIES';
export const GET_UPCOMING_M0VIES = 'GET_UPCOMING_M0VIES';

export function getBollywoodMovies(params) {
  const request = createAPIEndpoint(
    ENDPIONTS.BASEENDPIONT,
    ENDPIONTS.BOLLYWOOD,
  ).fetchAll();

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_BOLLYWOOD_MOVIES,
        payload: response.data,
      }),
    );
}

export function getHollywoodMovies(params) {
  const request = createAPIEndpoint(ENDPIONTS.UPCOMING_M0VIES).fetchAll();

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_UPCOMING_M0VIES,
        payload: response.data,
      }),
    );
}
