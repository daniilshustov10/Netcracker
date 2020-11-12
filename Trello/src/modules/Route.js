export class Route {
    constructor(name, path, component) {
        this.name = name;
        this.path = path;
        this.component = component;
    }

    render() {        
        this.component.render();
    }
}