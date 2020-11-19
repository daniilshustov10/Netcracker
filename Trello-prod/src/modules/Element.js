export class Element {
    constructor(tag = 'div', attrs = {}, classes = [], children = '') {
        this.element = document.createElement(tag);

        Object.keys(attrs)
            .forEach(attr => this.element.setAttribute(attr, attrs[attr]))
        
        if (classes.length) {
            classes.forEach(className => this.element.classList.add(className));
        }  
        
        if (children) {
            this.element.textContent = children;
        }

        return this.element;
    }
}
