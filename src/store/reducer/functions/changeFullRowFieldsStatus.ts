import columnI from "../../../interfaces/column";

export default (columns: Array<columnI>, fullRows: Array<number>) =>
  columns.map(column => ({
    rows: column.rows.map((row, rowIndex, rows) => {
      if (fullRows.some(y => y >= rowIndex)) {
        return {
          fieldEmpty: rows[rowIndex - 1]
            ? rows[rowIndex - 1].fieldEmpty
            : row.fieldEmpty
        };
      } else {
        return row;
      }
    })
  }));
