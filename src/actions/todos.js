import { LOAD_TODOS } from './types';
import { getTodos } from '../api/todos';

export const loadTodos = () => async dispatch => {
  const todos = await getTodos();

  dispatch({
    type: LOAD_TODOS,
    payload: todos
  });
};
