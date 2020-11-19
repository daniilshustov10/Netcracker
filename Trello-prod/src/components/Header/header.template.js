export function template() {
    return {
        tag: 'section', 
        attrs: {},
        classes: ['wrapper__header', 'header'], 
        children: null,
        childNodes: [
            { tag: 'a', attrs: {href: '/'}, classes: ['header__logo'], children: null }
        ]
    }
}