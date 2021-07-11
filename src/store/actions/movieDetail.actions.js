import {createAPIEndpoint} from '../../api';

export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const GET_MOVIE_VIDEO = 'GET_MOVIE_VIDEO';
export const GET_ACTORS_OF_MOVIE = 'GET_ACTORS_OF_MOVIE';

export function getMovieDetails(movie_id) {
  const request = createAPIEndpoint(
    `/movie/${movie_id}?api_key=4c030cb59dcb2c7bc5d6756cd32771f8&append_to_response=videos`,
  ).fetchById();

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: response.data,
      }),
    );
}

export function getMovieVideo(movie_id) {
  const request = createAPIEndpoint(
    `/movie/${movie_id}/videos?api_key=4c030cb59dcb2c7bc5d6756cd32771f8&language=en-US`,
  ).fetchById();

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_MOVIE_VIDEO,
        payload: response.data,
      }),
    );
}

export function getActorsOfMovie(movie_id) {
  const request = createAPIEndpoint(`/movie/${movie_id}/casts`).fetchById();

  return dispatch =>
    request.then(response =>
      dispatch({
        type: GET_ACTORS_OF_MOVIE,
        payload: response.data,
      }),
    );
}
