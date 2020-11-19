import { Component } from "../Component";
import { template } from "../Board/board.template";
import { Storage } from "../../utils/localStorage";

export class Board extends Component {
    constructor(props = {}) {
        super(props);
        this.component = null;
    }

    addColumn(head) {
        Storage.addColumn({
            id: Date.now(),
            head,
            cards: []
        })
    }

    addListener() {

        const addColumn = this.component.querySelector('.board__add-column');
        const addColumnContent = addColumn.querySelector('.board__add-column-content');
        const form = this.component.querySelector('.board__add-column-form');
        const formInput = form.querySelector('.form__input');
        const confirmButton = form.querySelector('[type=submit]');
        const cancelButton = form.querySelector('[type=button]');      

        form.classList.toggle('_hide');

        addColumn.addEventListener('click',  (function addColumnHandler(event) {           
            form.classList.toggle('_hide');
            addColumn.classList.toggle('_form');
            addColumnContent.classList.toggle('_hide');
            
            if (event.target === formInput) {
                form.classList.toggle('_hide');
                addColumn.classList.toggle('_form');
                addColumnContent.classList.toggle('_hide');
            }

            if (event.target === confirmButton) {
                event.preventDefault();
                this.addColumn(formInput.value.trim());

                addColumn.removeEventListener('click', addColumnHandler);
                this.component.replaceWith(new Board(Storage.getColumns()).render())
            }

        }).bind(this));
    }

    render() {
        this.component = this.compile(template(this.props));

        this.addListener();

        return this.component;
    }
}