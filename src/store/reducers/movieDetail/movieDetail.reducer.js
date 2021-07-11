import * as Actions from '../../actions';

const initialState = {
  data: [],
  video: [],
  actors: [],
};

const movieDetail = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_MOVIE_DETAILS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case Actions.GET_MOVIE_VIDEO: {
      return {
        ...state,
        video: action.payload,
      };
    }
    case Actions.GET_ACTORS_OF_MOVIE: {
      return {
        ...state,
        actors: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default movieDetail;
