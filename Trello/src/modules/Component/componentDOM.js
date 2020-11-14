import { Element } from '../Element/element'

export class ComponentDOM {
    constructor(component) {
        this.component = component;
    }

    mountComponent(container) {
        const { componentConfig } = this.component;
        const { type, attrs, classes, props, children } = componentConfig;

        const rootElement = new Element(type, attrs, classes, props, children);
        const rootDOMElement = rootElement.render(container); 

        if (componentConfig.hasOwnProperty('childNodes')) {
            this.createElementsFromChildNodes(componentConfig.childNodes, rootDOMElement);
        }
    }

    createElementsFromChildNodes(childNodes, container) {
        childNodes.forEach(childElement => {
            const {type, attrs, classes, props, children} = childElement;
            const element = new Element(type, attrs, classes, props, children);
            const elementDOM = element.render(container);

            if (childElement.hasOwnProperty('childNodes')) {
                this.createElementsFromChildNodes(childElement.childNodes, elementDOM);
            }
        })
    }   
}