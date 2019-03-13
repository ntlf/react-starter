import { todosReceived } from '../actions/todos';
import todos from './todos';

describe('todos reducer', () => {
  it('is a function', () => {
    expect(todos.constructor).toBe(Function);
  });

  it('should output todos', () => {
    const data = [
      {
        id: '1',
        text: 'One',
      },
      {
        id: '2',
        text: 'Two',
      },
    ];

    expect(todos({}, todosReceived(data))).toMatchSnapshot();
  });
});
