import Home from './components/home/Home';
import Login from './components/auth/Login';
import NotFound from './components/not-found/NotFound';
import Logout from './components/auth/Logout';

export const publicRoutes = [
  {
    path: '/login',
    component: Login,
  },
];

export const privateRoutes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/logout',
    component: Logout,
  },
  {
    component: NotFound,
  },
];
