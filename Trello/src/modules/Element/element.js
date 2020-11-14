import { ElementDOM } from './elementDOM'

export class Element {
    constructor(type = "div", attrs = {}, classes = [], props, children) {
        
        this.element = {
            type,
            attrs,
            classes,
            props : props || {}
        }

        if (children) {
            this.element.props.children = children;
        }
    }

    render(container) {
        const instanceElementDOM = new ElementDOM(this.element);
        return instanceElementDOM.mountElement(container);
    }
}