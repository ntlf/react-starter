import Todos from './containers/todos/Todos';
import NotFound from './components/not-found/NotFound';

export const publicRoutes = [
  // Login
];

export const privateRoutes = [
  {
    path: '/todos',
    component: Todos
  },
  {
    component: NotFound
  }
];
