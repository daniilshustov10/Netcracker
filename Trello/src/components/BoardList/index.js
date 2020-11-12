import { Component } from '../Component'
import { templateBoardList } from './template'

class BoardList extends Component {
    constructor(tag, props, attrs, classes) {
        super(tag, props, attrs, classes);

        this.state = {}
        this.template = templateBoardList(this.state)
    }
}

export const boardList = new BoardList('div', {}, {});