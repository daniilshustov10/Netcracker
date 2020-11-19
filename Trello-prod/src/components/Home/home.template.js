import { Storage } from '../../utils/localStorage';
import { Board } from '../Board';
import { Header } from '../Header';

export function template() {
    return {
        tag: 'div',
        attrs: {},
        classes: ['app__wrapper', 'wrapper'],
        children: null,
        childNodes: [
            new Header().render(),
            new Board(Storage.getColumns()).render()
        ]
    }
}

// {
//     columns: [
//             {id: Date.now(), head: 'column1', cards: [
//                 {id: Date.now(), content: 'card1'}
//             ]},
//             {id: Date.now(), head: 'column2', cards: [
//                 {id: Date.now(), content: 'card1'},
//                 {id: Date.now(), content: 'card1'}
//             ]}
//         ]
// }