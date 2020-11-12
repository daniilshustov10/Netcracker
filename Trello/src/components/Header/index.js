import { Component } from '../Component';
import { templateHeader } from './template'

export class Header extends Component {
    constructor(tag, props, attrs, classes) {
        super(tag, props, attrs, classes);

        this.state = {}
        this.template = templateHeader(this.state);
    }
}

export const header = new Header('div', {}, {}, ['header']);








