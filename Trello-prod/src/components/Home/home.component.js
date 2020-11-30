import { Component} from '../Component';
import { template } from './home.template';

export class Home extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }
  
    render() {
       this.component = this.compile(template());

       return this.component;
    }
}