import {combineReducers} from 'redux';
import movieDetail from './movieDetail.reducer';

const reducer = combineReducers({
  movieDetail,
});

export default reducer;
