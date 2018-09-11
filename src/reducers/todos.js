import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from '../actions/types';

const initialState = {
  data: [],
  isFetching: true,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...initialState,
        isFetching: true
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...action.payload.data]
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
