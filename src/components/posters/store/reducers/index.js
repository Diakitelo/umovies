import {combineReducers} from 'redux';
import moviesByCountry from './moviesByCountry.reducers';

const reducer = combineReducers({
  moviesByCountry,
});

export default reducer;
