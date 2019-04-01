import configureMockStore from 'redux-mock-store';
import { getDefaultMiddleware } from 'redux-starter-kit';
import { loadTodos } from './todos';

jest.mock('../api/todos');

const middlewares = [...getDefaultMiddleware()];
const mockStore = configureMockStore(middlewares);

describe('todos actions', () => {
  describe('loadTodos', () => {
    it('is a function', () => {
      expect(loadTodos.constructor).toBe(Function);
    });

    it('should invoke actions correctly', async () => {
      const store = mockStore({ todos: {} });

      await store.dispatch(loadTodos());

      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
