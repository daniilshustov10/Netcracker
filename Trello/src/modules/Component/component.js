import { ComponentDOM } from './componentDOM'

export class Component {
    constructor(props, componentConfig) {
        this.component = {
            props: props || {},
            componentConfig
        }
    }

    render(container) {
        const instanceComponentDOM = new ComponentDOM(this.component);
        instanceComponentDOM.mountComponent(container);
    }    
}