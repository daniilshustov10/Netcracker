import { Card } from '../Card';
import { Form } from '../Form';

export function template(props) {
    return {
        tag: 'div',
        attrs: {},
        classes: ['board__column', 'column'],
        children: null, 
        childNodes: [
            {
                tag: 'div',
                attrs: {},
                classes: ['column__delete'],
                children: null
            },
            {
                tag: 'div',
                attrs: {},
                classes: ['column__content'],
                children: null,
                childNodes: [
                    {
                       tag: 'div',
                       attrs: {},
                       classes: ['column__content-head'],
                       children: props.head
                    },
                    {
                        tag: 'div',
                        attrs: {},
                        classes: ['column__content-list'],
                        children: null,
                        childNodes: props.cards.map(card => new Card({...card, columnId: props.id}).render())
                    },
                    {
                        tag: 'div',
                        attrs: {},
                        classes: ['column__content-add'],
                        children: 'Добавить карточку'
                    },
                    {
                        tag: 'div',
                        attrs: {},
                        classes: ['column__content-form'],
                        children: null,
                        childNodes: [
                            new Form({
                                placeholder: 'Название карточки',
                                buttonName: 'Добавить карточку'
                            }).render()
                        ]
                    },                    
                ]
            }
        ]
    }
}

