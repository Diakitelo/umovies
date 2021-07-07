import {createAPIEndpoint, ENDPIONTS} from '../../../../api';

export const GET_ACTORS = 'GET_ACTORS';
export const MOVIES_BY_ACTOR = 'MOVIES_BY_ACTOR';
export const GET_ACTORS_DETAILS = 'GET_ACTORS_DETAILS';

export function getActors(params) {
  const request = createAPIEndpoint(ENDPIONTS.ACTORS).fetchAll();

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_ACTORS,
        payload: response.data,
      }),
    );
}

export function getMoviesByActor(params) {
  const request = createAPIEndpoint(
    `/discover/movie?with_people=${params}&sort_by=vote_average.desc&api_key=4c030cb59dcb2c7bc5d6756cd32771f8&language=en-US`,
  ).fetchById();

  return dispatch =>
    request.then(response =>
      dispatch({
        type: MOVIES_BY_ACTOR,
        payload: response.data,
      }),
    );
}
export function getActorDetails(params) {
  const request = createAPIEndpoint(
    `/person/${params}?api_key=4c030cb59dcb2c7bc5d6756cd32771f8&language=en-US`,
  ).fetchById();

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_ACTORS_DETAILS,
        payload: response.data,
      }),
    );
}
