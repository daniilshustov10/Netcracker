export class ElementDOM {
    constructor(element) {
        this.element = element;
    }

    mountElement(container) {
        const { type, props } = this.element;
        const domElement = document.createElement(type);

        if (props.children) {
            const textNode = document.createTextNode(props.children);        
            domElement.appendChild(textNode);
        }

        container.appendChild(domElement);
        return domElement;
    }
}