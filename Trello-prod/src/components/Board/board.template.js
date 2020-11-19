import { Column } from "../Column/column.component";
import { Form } from "../Form/form.component";

export function template(props) {
    return {
        tag: 'section', 
        attrs: {},
        classes: ['wrapper__board', 'board'],
        children: null,
        childNodes: [
            ...props.map(column => new Column(column).render()),
            { 
                tag: 'div', 
                attrs: {}, 
                classes: ['board__add-column'], 
                children: null, 
                childNodes: [
                    { 
                        tag: 'div', 
                        attrs: {}, 
                        classes: ['board__add-column-content'], 
                        children: 'Добавьте еще одну колонку'
                    },
                    { 
                        tag: 'div', 
                        attrs: {}, 
                        classes: ['board__add-column-form'], 
                        children: null,
                        childNodes: [
                            new Form({
                                placeholder: 'Введите название столбца',
                                buttonName: 'Добавить список'
                            }).render()
                        ]
                    }
                ]
            }
        ]
    }
}

