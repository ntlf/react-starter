import Home from './components/Home';
import NotFound from './components/NotFound';

export const publicRoutes = [
  // Login
];

export const privateRoutes = [
  {
    path: '/home',
    component: Home
  },
  {
    component: NotFound
  }
];
