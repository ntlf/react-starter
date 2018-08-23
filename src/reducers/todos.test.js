import todos from './todos';
import { LOAD_TODOS } from '../actions/types';

describe('todos reducer', () => {
  it('is a function', () => {
    expect(todos.constructor).toBe(Function);
  });

  it('should output todos', () => {
    const data = [
      {
        id: '1',
        text: 'One'
      },
      {
        id: '2',
        text: 'Two'
      }
    ];

    const action = {
      type: LOAD_TODOS,
      payload: data
    };
    expect(todos({}, action)).toMatchSnapshot();
  });
});
