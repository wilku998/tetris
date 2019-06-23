import columnI from "../../../interfaces/column";

export default (columns: Array<columnI>) =>
  columns.map(column => ({
    rows: column.rows.map(e => ({ fieldEmpty: e.fieldEmpty }))
  }));
