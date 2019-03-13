import { createReducer } from 'redux-starter-kit';
import { todosReceived } from '../actions/todos';

const todos = createReducer(
  {
    data: [],
  },
  {
    [todosReceived]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  }
);

export default todos;
