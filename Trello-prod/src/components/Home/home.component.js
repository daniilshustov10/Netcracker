import { Component} from '../Component';
import { template } from './home.template';

export class Home extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    addListener() {

        const button = this.component.querySelector('.wrapper__button');

        button.setAttribute('hidden', 'true');

        const scrollTop = new CustomEvent('scroll-top');

        button.addEventListener('scroll-top', function(event) {
            window.scrollTo(0, 0);
        })

        button.addEventListener('click', function clickHandler(event) {
            button.dispatchEvent(scrollTop);
        })

        window.addEventListener('scroll', function scrollHandler(event) {
            window.pageYOffset > 100 
                ? button.removeAttribute('hidden')
                : button.setAttribute('hidden', 'true')
        })
    }
  
    render() {
       this.component = this.compile(template());

       this.addListener();

       return this.component;
    }
}