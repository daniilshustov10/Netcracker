import { Component } from '../Component';
import { template } from './form.template';

export class Form extends Component {
    constructor(props = {}) {
        super(props);
    }

    render() {
        return this.compile(template(this.props))
    }
}