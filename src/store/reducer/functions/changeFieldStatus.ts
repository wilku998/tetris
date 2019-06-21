import columnI from '../../../interfaces/column';

export default (columns: Array<columnI["column"]>, position: { x: number, y: number }) => {
    return columns.map((column, columnIndex) => {
        if (columnIndex === position.x) {
            return {
                rows: column.rows.map((row, rowIndex) => {
                    if (rowIndex === position.y) {
                        return {
                            fieldEmpty: false
                        };
                    } else {
                        return row;
                    }
                })
            };
        } else {
            return column;
        }
    });
}
