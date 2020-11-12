export class Component {
    constructor(tag = "div", props = {}, attrs = {}, classes = []) {
        
        this.element = document.createElement(tag);          

        Object.keys(attrs)
            .forEach(attr => {
                this.element.setAttribute(attr, attrs[attr]);
            })

        if (classes.length) {
            classes.forEach(className => {
                this.element.classList.add(className);
            })
        }

        this.props = props;
        this.template = ''
    }

    render() {
        this.element.innerHTML = this.template;
        return this.element;
    }

    getAttribute(name) {
        return this.element.getAttribute(name);
    }

    hide() {
        this.element.setAttribute('hidden', true);
    }

    show() {
        this.element.setAttribute('hidden', false);
    }
}