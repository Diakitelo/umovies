import * as Actions from '../actions';

const initialState = {
  bollywood: [],
  hollywood_movies: [],
};
const moviesByCountry = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_BOLLYWOOD_MOVIES: {
      return {
        ...state,
        bollywood: action.payload,
      };
    }
    case Actions.GET_UPCOMING_M0VIES: {
      return {
        ...state,
        hollywood_movies: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default moviesByCountry;
