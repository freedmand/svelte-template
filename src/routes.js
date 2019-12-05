import NotFound from '@/pages/NotFound';
import About from '@/pages/About';
import Home from '@/pages/Home';
import User from '@/pages/User';

export const routes = [NotFound, {
  'home': {
    path: '',
    component: Home
  },
  'about': {
    path: '/about',
    component: About
  },
  'user': {
    path: '/users/:name',
    component: User,
  }
}];
