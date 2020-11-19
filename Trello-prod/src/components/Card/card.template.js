export function template(props) {
    return {
        tag: 'div',
        attrs: { draggable: 'true'},
        classes: ['list__item', 'card'],
        children: null,
        childNodes: [
            { tag: 'div', attrs: {}, classes: ['card__content'], children: props.content },
            { tag: 'button', attrs: {type: 'button'}, classes: ['card__delete', 'button', '_dark'], children: 'Удалить' }
        ]
    }
}



