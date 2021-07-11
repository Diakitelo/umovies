import {combineReducers} from 'redux';
import movieDetail from './movieDetail';

const createReducer = asyncReducers =>
  combineReducers({
    movieDetail,
    ...asyncReducers,
  });

export default createReducer;
