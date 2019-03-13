import { createAction } from 'redux-starter-kit';
import { getTodos } from '../api/todos';

export const todosReceived = createAction('TODOS_RECEIVED');

export const loadTodos = () => async dispatch => {
  const todos = await getTodos();

  dispatch(todosReceived(todos));
};
