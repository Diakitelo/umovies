import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4c030cb59dcb2c7bc5d6756cd32771f8';

export const ENDPIONTS = {
  BASEENDPIONT: '/discover/movie',
  POPULARMOVIES: '/movie/popular',
  UPCOMING_M0VIES: '/movie/upcoming',
  ACTORS: '/person/popular',
  MOVIES_BY_ACTOR: '/discover/movie?with_people=287&sort_by=vote_average.desc',
  FRENCH_MOVIES:
    '&language=fr-FR&sort_by=release_date.desc&page=1&with_original_language=fr',
  BOLLYWOOD:
    '&language=en-US&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2021&with_original_language=hi',
};

export const createAPIEndpoint = (endpoint, params = '') => {
  let url = BASE_URL + endpoint + '?api_key=' + API_KEY + params;
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id = '') => axios.get(url + id),
    create: newRecord => axios.post(url, newRecord),
    update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: id => axios.delete(url + id),
  };
};
