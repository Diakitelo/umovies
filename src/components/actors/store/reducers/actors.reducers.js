import * as Actions from '../actions';

const initialState = {
  actors: [],
  actorDetails: [],
  moviesByActor: [],
};
const actors = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ACTORS: {
      return {
        ...state,
        actors: action.payload,
      };
    }
    case Actions.MOVIES_BY_ACTOR: {
      return {
        ...state,
        moviesByActor: action.payload,
      };
    }
    case Actions.GET_ACTORS_DETAILS: {
      return {
        ...state,
        actorDetails: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default actors;
