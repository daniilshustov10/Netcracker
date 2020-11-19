import { Component} from '../Component';
import { template } from './home.template';

export class Home extends Component {
    constructor(props = {}) {
        super(props);
    }

    render() {
       return this.compile(template());
    }
}