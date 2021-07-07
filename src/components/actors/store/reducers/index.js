import {combineReducers} from 'redux';
import actors from './actors.reducers';

const reducer = combineReducers({
  actors,
});

export default reducer;
