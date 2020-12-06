// union

let myArr: [string, number | string] = ['srt', 5]

function padLeft(property: 'padding-left', value: string | number) {
    if (typeof value === 'string') {
        return {
            property: parseInt(value)
        }
    }

    if (typeof value === 'number') {
        return {
            property: value + 'px'
        }
    }
}
