import * as Actions from '../actions';

const initialState = {
  data: [],
};
const recommendedReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_POPULARMOVIES: {
      return {
        ...state,

        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default recommendedReducer;
