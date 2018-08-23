import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loadTodos } from './todos';

jest.mock('../api/todos');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('todos actions', () => {
  describe('loadTodos', () => {
    it('is a function', () => {
      expect(loadTodos.constructor).toBe(Function);
    });

    it('should invoke actions correctly', () => {
      const store = mockStore({ todos: {} });

      return store.dispatch(loadTodos()).then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
    });
  });
});
