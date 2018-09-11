import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS
} from './types';
import { getTodos, postTodo } from '../api/todos';

export const loadTodos = () => async dispatch => {
  dispatch({
    type: FETCH_TODOS_REQUEST
  });

  try {
    const todos = await getTodos();

    dispatch({
      type: FETCH_TODOS_SUCCESS,
      payload: { data: todos }
    });
  } catch ({ response: { data: error } }) {
    dispatch({
      type: FETCH_TODOS_FAILURE,
      payload: { error }
    });
  }
};

export const addTodo = todo => async dispatch => {
  await postTodo(todo);

  dispatch(loadTodos());
};
