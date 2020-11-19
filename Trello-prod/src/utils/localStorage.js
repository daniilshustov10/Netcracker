export class Storage {
    static getColumns() {
        return JSON.parse(localStorage.getItem('columns')) || [];
    }

    static getColumn(id) {
        const columns = Storage.getColumns();
        return columns.find(column => column.id === id);
    }

    static addColumn(column) {
        const columns = Storage.getColumns();
        if (columns) {
            columns.push(column);
            localStorage.setItem('columns', JSON.stringify(columns));        
        }
    }

    static deleteColumn(columnId) {
        let columns = Storage.getColumns();
        columns = columns.filter(column => column.id !== columnId);
        localStorage.setItem('columns', JSON.stringify(columns));
    }

    static addCard(columnId, card) {
        const columns = Storage.getColumns();
        const needColumn = columns.find(column => column.id === columnId);
        needColumn.cards.push(card);
        localStorage.setItem('columns', JSON.stringify(columns));
    }

    static updateCard(card, content) {
        const { columnId, id: cardId } = card;

        // const columns = Storage.getColumns();
        // const needColumn = Storage.getColumn(columnId);
        // const oldCard = needColumn.cards.find(card => card.id === cardId);
        // oldCard.content = content;

        // const columns = [
        //     ...Storage.getColumns(),
        //     Storage.getColumn()
        // ]  

        // localStorage.setItem('columns', JSON.stringify(columns));      
    }
}