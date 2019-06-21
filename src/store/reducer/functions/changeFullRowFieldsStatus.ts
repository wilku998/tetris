import columnI from '../../../interfaces/column';

export default (columns: Array<columnI["column"]>, position: { x: number, y: number }) => {
    return columns.map((column) => ({
        rows: column.rows.map((row, rowIndex, rows) => {
            if(rowIndex <= position.y){
                return {
                    fieldEmpty: rows[rowIndex-1] ? rows[rowIndex-1].fieldEmpty : row.fieldEmpty
                }
            }else{
                return {
                    fieldEmpty: row.fieldEmpty
                }
            }
        })
    }))
}

