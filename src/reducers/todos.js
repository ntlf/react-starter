import { LOAD_TODOS } from '../actions/types';

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        data: [...action.payload]
      };
    default:
      return state;
  }
};
