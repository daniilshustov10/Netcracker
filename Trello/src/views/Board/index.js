export { Board } from '../../components/Board'

const configBoard = {
    type: 'section', attrs: {}, classes: ['app__board', 'board'], props: null, children: null
}

export default function createBoard() {
    return new Board(null, configBoard)
}