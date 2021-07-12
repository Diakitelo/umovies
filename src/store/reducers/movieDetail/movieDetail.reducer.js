import * as Actions from '../../actions';

const initialState = {
  data: [],
  video: [],
  actors: [],
  sameGenresMovies: [],
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
    case Actions.GET_MOVIES_BY_GENRE: {
      return {
        ...state,
        sameGenresMovies: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default movieDetail;
