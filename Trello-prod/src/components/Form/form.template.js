export function template(props) {
    return {
        tag: 'form',
        attrs: {},
        classes: ['form'],
        children: null, 
        childNodes: [
            { 
                tag: 'input', 
                attrs: { type: 'text', placeholder: props.placeholder }, 
                classes: ['form__input'], 
                children: null 
            },
            { 
                tag: 'div',
                attrs: {},
                classes: ['form__footer'],
                children: null,
                childNodes: [
                    {
                        tag: 'button',
                        attrs: {type: 'submit'},
                        classes: ['form__footer-button', 'button', '_primary'],
                        children: props.buttonName
                    },
                    {
                        tag: 'button',
                        attrs: {type: 'button'},
                        classes: ['form__footer-button', 'button', '_secondary'],
                        children: "Отмена"
                    }
                ]            
            }
        ]
    }
}

