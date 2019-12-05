import rlite from 'rlite-router';
import { writable, derived } from 'svelte/store';
import { routes as routesObj } from '@/routes';

export class Router {
  constructor(notFound, routes) {
    this.notFound = notFound;
    this.routes = routes;

    const mapping = {};
    for (const name in routes) {
      if (routes.hasOwnProperty(name)) {
        const route = routes[name];
        mapping[route.path] = (props) => {
          return { name, props, component: route.component };
        }
      }
    }
    this.router = rlite(() => notFound, mapping);
  }

  lookup(name) {
    return this.routes[name].path;
  }

  resolve(path) {
    const r = this.router(path);
    return this.router(path);
  }
}

export const routes = new Router(...routesObj);

export const currentUrl = writable('');

export const resolvedRoute = derived(currentUrl, $currentUrl => routes.resolve($currentUrl));
