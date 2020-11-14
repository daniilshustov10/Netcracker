export { Header } from '../../components/Header'

const configHeader = {
    type: 'section', attrs: {}, classes: ['app__header', 'header'], props: null, children: null, childNodes: [
        { type: 'a', attrs: { href: '#'}, classes: ['header__logo'], props: null, children: null },
        { type: 'div', attrs: {}, classes: ['header__corner'], props: null, children: null, childNodes: [
            { type: 'a', attrs: { href: '#'}, classes: ['header__corner-item'], props: null, children: null }
        ]}
    ]
}

export default function createHeader() {
    return new Header(null, configHeader)
}
