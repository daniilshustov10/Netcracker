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
        const columnContentForm = columnContent.querySelector('.column__content-form');
        const form = columnContentForm.querySelector('.form');

        columnContentForm.classList.toggle('_hide');
        
        this.component.addEventListener('click', (function columnClickHandler(event) {
            if (event.target === addCard) {
                columnContentForm.classList.toggle('_hide');
                addCard.classList.toggle('_hide');
            }

            if (event.target === form.cancel) {
                columnContentForm.classList.toggle('_hide');
                addCard.classList.toggle('_hide');
            }

            if (event.target === columnDelete) {
                this.deleteColumn();

                this.component.removeEventListener('click', columnClickHandler);                

                document.querySelector('.board').replaceWith(new Board(Storage.getColumns()).render());
            }            

        }).bind(this))

        form.addEventListener('submit', (function submitHandler(event) {
            event.preventDefault();          

            this.addCard(form.input.value.trim());

            form.removeEventListener('submit', submitHandler);

            this.component.replaceWith(new Column(Storage.getColumn(this.props.id)).render());       

        }).bind(this));

    }

    render() {
        this.component = this.compile(template(this.props));

        this.addListener();

        return this.component;
    }
}