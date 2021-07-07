import {combineReducers} from 'redux';
import recommended from './recommended.reducers';

const reducer = combineReducers({
  recommended,
});

export default reducer;
