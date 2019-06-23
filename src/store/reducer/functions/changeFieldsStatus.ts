import columnI from '../../../interfaces/column';

export default (columns: Array<columnI>, positions: Array<{x: number, y: number}>) => {
    positions.forEach(({x,y}) => {
        columns[x].rows[y].fieldEmpty=false
    })
}
