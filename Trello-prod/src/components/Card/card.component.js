import { Storage } from '../../utils/localStorage';
import { Component } from '../Component';
import { template } from './card.template';

export class Card extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    updateCard(content) {

        Storage.updateCard(this.props, content);
    }

    addListener() {
        
        const cardContent = this.component.querySelector('.card__content');
        const deleteCard = this.component.querySelector('.card__delete');

        deleteCard.classList.toggle('_hide');

        cardContent.addEventListener('dblclick', (function clickCardHandler(event) {
            deleteCard.classList.toggle('_hide');

            cardContent.setAttribute('contenteditable', 'true');
            cardContent.focus();
            
        }).bind(this));

        cardContent.addEventListener('blur', (function blurHandler(event) {
            
            if (this.props.content !== cardContent.textContent.trim()) {
                this.updateCard(cardContent.textContent.trim());
            }

            cardContent.removeAttribute('contenteditable');
            deleteCard.classList.toggle('_hide');

        }).bind(this));          
    }

    render() {
        this.component = this.compile(template(this.props));

        this.addListener();

        console.log(this.props)

        return this.component;
    }
}
