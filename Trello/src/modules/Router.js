import { Route } from './Route'

export class Router {
    constructor() {
        this.routes = [];
        this.history = window.history;
        this.currentRoute = null;
    }

    addRoute(route) {
        const { name, path, component } = route;        
        this.routes.push(new Route(name, path, component));
        return this;
    }

    getRoute(pathname) {
        return this.routes.find(route => route.path === pathname);
    }

    onRoute(pathname) {
        const route = this.getRoute(pathname);

        if (!route) return;

        if (this.currentRoute) {
            this.currentRoute.component.hide();
        }

        this.currentRoute = route;
        this.currentRoute.render();
    }

    initRoutes() {
        const path = window.location.pathname;
        this.onRoute(path);

        window.onpopstate =  () => {
            const path = window.location.pathname;
            this.onRoute(path);
        }
    }

    navigate(path) {
        this.history.pushState({}, '', path);
        this.onRoute(path);
    }  
}