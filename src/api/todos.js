import delay from './delay';
import { getTodos as mockedGetTodos } from './__mocks__/todos';

export const getTodos = async () => {
  // TODO network
  // const todos = await axios.get('/api/todos');

  await delay(1000);

  return mockedGetTodos();
};
