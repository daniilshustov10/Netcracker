import { Storage } from "../../utils/localStorage";
import { Component } from "../Component";
import { Board } from '../Board';
import { template } from "./column.template";

export class Column extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    deleteColumn() {

        Storage.deleteColumn(this.props.id);
    }

    addCard(content) {

        const card = {
            id: Date.now(),
            content
        }

        Storage.addCard(this.props.id, card);
    }

    addListener() {

        const columnDelete = this.component.querySelector('.column__delete');
        const columnContent = this.component.querySelector('.column__content');
        const addCard = columnContent.querySelector('.column__content-add');
        const form = columnContent.querySelector('.column__content-form');
        const formInput = form.querySelector('.form__input');
        const confirmButton = form.querySelector('[type=submit]');
        const cancelButton = form.querySelector('[type=button');

        form.classList.toggle('_hide');
        
        this.component.addEventListener('click', (function columnClickHandler(event) {
            if (event.target === addCard) {
                form.classList.toggle('_hide');
                addCard.classList.toggle('_hide');
            }

            if (event.target === cancelButton) {
                form.classList.toggle('_hide');
                addCard.classList.toggle('_hide');
            }

            if (event.target === columnDelete) {
                this.deleteColumn();

                this.component.removeEventListener('click', columnClickHandler);                

                document.querySelector('.board').replaceWith(new Board(Storage.getColumns()).render());
            }

            if (event.target === confirmButton) {
                event.preventDefault();

                this.addCard(formInput.value.trim());
                
                this.component.removeEventListener('click', columnClickHandler);
                this.component.replaceWith(new Column(Storage.getColumn(this.props.id)).render());
            }

        }).bind(this))
    }

    render() {
        this.component = this.compile(template(this.props));

        this.addListener();

        return this.component;
    }
}