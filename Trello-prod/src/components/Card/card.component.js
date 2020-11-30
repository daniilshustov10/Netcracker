import { Storage } from '../../utils/localStorage';
import { Column } from '../Column/column.component';
import { Component } from '../Component';
import { template } from './card.template';

export class Card extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    updateCard(content) {
        const { columnId, id: cardId} = this.props;

        Storage.updateCard(columnId, cardId, content);
    }

    deleteCard() {
        const { columnId, id: cardId } = this.props;
        
        Storage.deleteCard(columnId, cardId);
    }

    addListener() {
        
        const cardContent = this.component.querySelector('.card__content');
        const deleteCard = this.component.querySelector('.card__delete');  
        
        deleteCard.addEventListener('click', (function clickHandler(event) {
            this.deleteCard();

            this.component.closest('.column').replaceWith(new Column(Storage.getColumn(this.props.columnId)).render());
        }).bind(this))
       

        cardContent.addEventListener('dblclick', (function dblClickHandler(event) {
            deleteCard.classList.toggle('_hide');        

            cardContent.setAttribute('contenteditable', 'true');
            cardContent.focus();           
            
        }).bind(this));


        cardContent.addEventListener('keydown', (function keyHandler(event) {
            if (!event.shiftKey && event.code === 'Enter') {
                event.preventDefault();

                const content = cardContent.textContent.trim();

                if (content.length && this.props.content !== content) {
                    this.updateCard(content);
                }

                cardContent.blur();
            }
           
        }).bind(this));


        cardContent.addEventListener('blur', (function blurHandler(event) { 
            const content = cardContent.textContent.trim();

            if (content.length && this.props.content !== content) {
                this.updateCard(content);
            }

            if (content.length) {
                if (this.props.content !== content) {
                    this.updateCard(content);
                }

                cardContent.removeAttribute('contenteditable');
                deleteCard.classList.toggle('_hide');
            } else {
                cardContent.focus();
            }                

        }).bind(this));
        
    }   
    
    render() {
        this.component = this.compile(template(this.props));

        this.addListener();

        return this.component;
    }
}
